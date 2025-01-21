import {
    Column,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    RowData,
    SortingFn,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
import { FaSortUp, FaSortDown, FaSort } from 'react-icons/fa';
import { Difficulty, Name, Resort, Slope } from '../data/Util';
import { useEffect, useMemo, useState } from 'react';

type SlopeRow = {
    id: number;
    resort: Name;
    name: Name;
    difficulty: Difficulty;
    length: number | undefined; // m
    width: number | undefined; // m
    area: number | undefined; //  m^2
    elevation: number | undefined; // m
    minAngle: number | undefined; // degree
    avgAngle: number | undefined; // degree
    maxAngle: number | undefined; // degree
    connectedSlopeIds: number[];
    connectedLiftIds: number[];
}

const columnHelper = createColumnHelper<SlopeRow>();

const sortDifficulties: SortingFn<SlopeRow> = (rowA, rowB, _columnId) => {
    const difficultyOrder = [
        Difficulty.BEGINNER,
        Difficulty.BE_IN,
        Difficulty.INTERMEDIATE,
        Difficulty.IN_AD,
        Difficulty.ADVANCED,
        Difficulty.EXPERT,
        Difficulty.PARK,
    ];

    const difficultyA = rowA.original.difficulty;
    const difficultyB = rowB.original.difficulty;

    return difficultyOrder.indexOf(difficultyA) - difficultyOrder.indexOf(difficultyB);
}

declare module '@tanstack/react-table' {
    //allows us to define custom properties for our columns
    interface ColumnMeta<TData extends RowData, TValue> {
        filterVariant?: 'text' | 'range' | 'select'
    }
}

function Filter({ column }: { column: Column<any, unknown> }) {
    const { filterVariant } = column.columnDef.meta ?? {}

    const columnFilterValue = column.getFilterValue()

    const sortedUniqueValues = useMemo(
        () =>
            filterVariant === 'range'
                ? []
                : Array.from(column.getFacetedUniqueValues().keys())
                    .sort()
                    .slice(0, 5000),
        [column.getFacetedUniqueValues(), filterVariant]
    )

    return filterVariant === 'range' ? (
        <div>
            <div className="flex space-x-2">
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue as [number, number])?.[0] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [value, old?.[1]])
                    }
                    placeholder={`Min ${column.getFacetedMinMaxValues()?.[0] !== undefined
                            ? `(${column.getFacetedMinMaxValues()?.[0]})`
                            : ''
                        }`}
                    className="w-24 border shadow rounded"
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
                    value={(columnFilterValue as [number, number])?.[1] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [old?.[0], value])
                    }
                    placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
                            ? `(${column.getFacetedMinMaxValues()?.[1]})`
                            : ''
                        }`}
                    className="w-24 border shadow rounded"
                />
            </div>
            <div className="h-1" />
        </div>
    ) : filterVariant === 'select' ? (
        <select
            onChange={e => column.setFilterValue(e.target.value)}
            value={columnFilterValue?.toString()}
        >
            <option value="">All</option>
            {sortedUniqueValues.map(value => (
                //dynamically generated select options from faceted values feature
                <option value={value} key={value}>
                    {value}
                </option>
            ))}
        </select>
    ) : (
        <>
            {/* Autocomplete suggestions from faceted values feature */}
            <datalist id={column.id + 'list'}>
                {sortedUniqueValues.map((value: any) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <DebouncedInput
                type="text"
                value={(columnFilterValue ?? '') as string}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
                className="w-36 border shadow rounded"
                list={column.id + 'list'}
            />
            <div className="h-1" />
        </>
    )
}

// A typical debounced input react component
function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
}

function SlopeTable({ resorts }: { resorts: Resort[] }) {
    const [data, _setData] = useState<SlopeRow[]>(() => {
        return resorts.flatMap(resort => {
            return resort.slopes.map(slope => {
                return {
                    id: slope.id,
                    resort: resort.name,
                    name: slope.name,
                    difficulty: slope.difficulty,
                    length: slope.length,
                    width: slope.width,
                    area: slope.area,
                    elevation: slope.elevation,
                    minAngle: slope.minAngle ? Math.round((slope.minAngle + Number.EPSILON) * 100) / 100 : undefined,
                    avgAngle: slope.avgAngle ? Math.round((slope.avgAngle + Number.EPSILON) * 100) / 100 : undefined,
                    maxAngle: slope.maxAngle ? Math.round((slope.maxAngle + Number.EPSILON) * 100) / 100 : undefined,
                    connectedSlopeIds: slope.connectedSlopeIds,
                    connectedLiftIds: slope.connectedLiftIds,
                }
            });
        });
    });
    const [sorting, setSorting] = useState<SortingState>([]);

    const columns = [
        columnHelper.accessor('resort', {
            header: "리조트",
            cell: info => info.getValue().ko,
            enableSorting: true,
            meta: {
                filterVariant: 'select',
            }
        }),
        columnHelper.accessor('name', {
            header: "이름",
            cell: info => info.getValue().ko,
            enableSorting: true,
        }),
        columnHelper.accessor('difficulty', {
            header: "난이도",
            enableSorting: true,
            sortDescFirst: false,
            cell: info => {
                const difficulty = info.getValue();
                return {
                    [Difficulty.BEGINNER]: "초급",
                    [Difficulty.BE_IN]: "초중급",
                    [Difficulty.INTERMEDIATE]: "중급",
                    [Difficulty.IN_AD]: "중상급",
                    [Difficulty.ADVANCED]: "상급",
                    [Difficulty.EXPERT]: "최상급",
                    [Difficulty.PARK]: "파크",
                }[difficulty];
            },
            sortingFn: sortDifficulties,
            meta: {
                filterVariant: 'select',
            }
        }),
        columnHelper.accessor('length', {
            header: "길이 (m)",
            cell: info => info.getValue() ? `${info.getValue()}` : '-',
            enableSorting: true,
            sortUndefined: 'last',
        }),
        columnHelper.accessor('width', {
            header: "폭 (m)",
            cell: info => info.getValue() ? `${info.getValue()}` : '-',
            enableSorting: true,
            sortUndefined: 'last',
        }),
        columnHelper.accessor('area', {
            header: "면적 (m²)",
            cell: info => info.getValue() ? `${info.getValue()}` : '-',
            enableSorting: true,
            sortUndefined: 'last',
        }),
        columnHelper.accessor('elevation', {
            header: "표고차 (m)",
            cell: info => info.getValue() ? `${info.getValue()}` : '-',
            enableSorting: true,
            sortUndefined: 'last',
        }),
        columnHelper.accessor('minAngle', {
            header: "최소각도 (°)",
            cell: info => info.getValue() ? `${info.getValue()}` : '-',
            enableSorting: true,
            sortUndefined: 'last',
        }),
        columnHelper.accessor('avgAngle', {
            header: "평균각도 (°)",
            cell: info => info.getValue() ? `${info.getValue()}` : '-',
            enableSorting: true,
            sortUndefined: 'last',
        }),
        columnHelper.accessor('maxAngle', {
            header: "최대각도 (°)",
            cell: info => info.getValue() ? `${info.getValue()}` : '-',
            enableSorting: true,
            sortUndefined: 'last',
        }),
    ];

    const table = useReactTable({
        data,
        columns,
        filterFns: {},
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel<SlopeRow>(),
        getFilteredRowModel: getFilteredRowModel<SlopeRow>(),
        getSortedRowModel: getSortedRowModel<SlopeRow>(),
    });

    return (
        <table className='overflow-x-auto rounded-md border'>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th
                                key={header.id}
                                className='px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                <div className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {{
                                        asc: <FaSortUp />,
                                        desc: <FaSortDown />,
                                    }[header.column.getIsSorted() as string] ?? null}
                                    {header.column.getCanFilter() ?? <Filter column={header.column} />}
                                    {header.column.getCanSort() && !header.column.getIsSorted() && <FaSort />}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => {
                    return (
                        <tr key={row.id} className='hover:bg-gray-50'>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className='px-2 py-3 whitespace-nowrap text-sm cursor-default'>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default SlopeTable;