import {
  Column,
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { Difficulty, Resort } from "@/data/Util";
import { useI18n } from "@/lib/i18n/context";
import {
  difficultyLabels,
  formatRangePlaceholder,
  formatSearchPlaceholder,
  strings,
} from "@/lib/i18n/strings";
import { Locale, getLocalizedText } from "@/lib/i18n/locales";

type SlopeRow = {
  id: number;
  resort: string;
  name: string;
  difficulty: Difficulty;
  difficultyLabel: string;
  length: number | undefined;
  width: number | undefined;
  area: number | undefined;
  elevation: number | undefined;
  minAngle: number | undefined;
  avgAngle: number | undefined;
  maxAngle: number | undefined;
};

const columnHelper = createColumnHelper<SlopeRow>();

/* eslint-disable @typescript-eslint/no-unused-vars */
declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    filterVariant?: "text" | "range" | "select" | "difficulty" | "resort";
  }
}
/* eslint-enable @typescript-eslint/no-unused-vars */

const diffSorting: SortingFn<SlopeRow> = (rowA, rowB) =>
  rowA.original.difficulty - rowB.original.difficulty;

type FilterProps = {
  column: Column<SlopeRow, unknown>;
  locale: Locale;
};

function Filter({ column, locale }: FilterProps) {
  const { t } = useI18n();
  const { filterVariant } = column.columnDef.meta ?? {};
  const columnFilterValue = column.getFilterValue();
  const facetedUniqueValues = column.getFacetedUniqueValues();

  const sortedUniqueValues = useMemo(() => {
    return Array.from(facetedUniqueValues.keys())
      .map((value) => value?.toString() ?? "")
      .sort((a, b) => a.localeCompare(b, locale));
  }, [facetedUniqueValues, locale]);

  const inputClasses =
    "rounded-md border border-slate-300 bg-white px-2 py-1 text-sm shadow-sm focus:border-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";
  const selectClasses =
    "w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-sm focus:border-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";

  if (filterVariant === "range") {
    const [min, max] = column.getFacetedMinMaxValues() ?? [];

    return (
      <div className="mt-2 space-y-2">
        <div className="flex gap-2">
          <DebouncedInput
            type="number"
            min={Number(min ?? "")}
            max={Number(max ?? "")}
            value={(columnFilterValue as [number, number])?.[0] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [value, old?.[1]])
            }
            placeholder={formatRangePlaceholder(strings.slopeTable.filters.min, min, locale)}
            className={`w-24 ${inputClasses}`}
          />
          <DebouncedInput
            type="number"
            min={Number(min ?? "")}
            max={Number(max ?? "")}
            value={(columnFilterValue as [number, number])?.[1] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [old?.[0], value])
            }
            placeholder={formatRangePlaceholder(strings.slopeTable.filters.max, max, locale)}
            className={`w-24 ${inputClasses}`}
          />
        </div>
      </div>
    );
  }

  if (filterVariant === "select" || filterVariant === "difficulty" || filterVariant === "resort") {
    return (
      <select
        onChange={(event) => column.setFilterValue(event.target.value)}
        value={columnFilterValue?.toString() ?? ""}
        className={selectClasses}
      >
        <option value="">{t(strings.slopeTable.filters.none)}</option>
        {sortedUniqueValues.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }

  const placeholder = formatSearchPlaceholder(facetedUniqueValues.size, locale);

  return (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={placeholder}
        className={`w-44 ${inputClasses}`}
      />
    </>
  );
}

type DebouncedInputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: DebouncedInputProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return <input {...props} value={value} onChange={(event) => setValue(event.target.value)} />;
}

function SlopeTable({ resorts }: { resorts: Resort[] }) {
  const { locale, t } = useI18n();
  const data = useMemo<SlopeRow[]>(() => {
    return resorts.flatMap((resort) =>
      resort.slopes.map((slope) => {
        const length = slope.length;
        const width = slope.width;
        const area = slope.area;
        const elevation = slope.elevation;
        const minAngle = slope.minAngle
          ? Math.round((slope.minAngle + Number.EPSILON) * 100) / 100
          : undefined;
        const avgAngle = slope.avgAngle
          ? Math.round((slope.avgAngle + Number.EPSILON) * 100) / 100
          : undefined;
        const maxAngle = slope.maxAngle
          ? Math.round((slope.maxAngle + Number.EPSILON) * 100) / 100
          : undefined;

        return {
          id: slope.id,
          resort: getLocalizedText(resort.name, locale),
          name: getLocalizedText(slope.name, locale),
          difficulty: slope.difficulty,
          difficultyLabel: getLocalizedText(difficultyLabels[slope.difficulty], locale),
          length,
          width,
          area,
          elevation,
          minAngle,
          avgAngle,
          maxAngle,
        };
      })
    );
  }, [locale, resorts]);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("resort", {
        header: t(strings.slopeTable.headers.resort),
        cell: (info) => info.getValue(),
        enableSorting: true,
        filterFn: "equalsString",
        meta: { filterVariant: "resort" },
      }),
      columnHelper.accessor("name", {
        header: t(strings.slopeTable.headers.name),
        cell: (info) => info.getValue(),
        enableSorting: true,
        filterFn: "includesString",
        meta: { filterVariant: "text" },
      }),
      columnHelper.accessor("difficultyLabel", {
        id: "difficulty",
        header: t(strings.slopeTable.headers.difficulty),
        cell: (info) => info.getValue(),
        enableSorting: true,
        sortingFn: diffSorting,
        filterFn: "equalsString",
        meta: { filterVariant: "difficulty" },
      }),
      columnHelper.accessor("length", {
        header: t(strings.slopeTable.headers.length),
        cell: (info) => <div className="text-right">{info.getValue() ?? "-"}</div>,
        enableSorting: true,
        sortUndefined: "last",
        filterFn: "inNumberRange",
        meta: { filterVariant: "range" },
      }),
      columnHelper.accessor("width", {
        header: t(strings.slopeTable.headers.width),
        cell: (info) => <div className="text-right">{info.getValue() ?? "-"}</div>,
        enableSorting: true,
        sortUndefined: "last",
        filterFn: "inNumberRange",
        meta: { filterVariant: "range" },
      }),
      columnHelper.accessor("area", {
        header: t(strings.slopeTable.headers.area),
        cell: (info) => <div className="text-right">{info.getValue() ?? "-"}</div>,
        enableSorting: true,
        sortUndefined: "last",
        filterFn: "inNumberRange",
        meta: { filterVariant: "range" },
      }),
      columnHelper.accessor("elevation", {
        header: t(strings.slopeTable.headers.elevation),
        cell: (info) => <div className="text-right">{info.getValue() ?? "-"}</div>,
        enableSorting: true,
        sortUndefined: "last",
        filterFn: "inNumberRange",
        meta: { filterVariant: "range" },
      }),
      columnHelper.accessor("minAngle", {
        header: t(strings.slopeTable.headers.minAngle),
        cell: (info) => <div className="text-right">{info.getValue() ?? "-"}</div>,
        enableSorting: true,
        sortUndefined: "last",
        filterFn: "inNumberRange",
        meta: { filterVariant: "range" },
      }),
      columnHelper.accessor("avgAngle", {
        header: t(strings.slopeTable.headers.avgAngle),
        cell: (info) => <div className="text-right">{info.getValue() ?? "-"}</div>,
        enableSorting: true,
        sortUndefined: "last",
        filterFn: "inNumberRange",
        meta: { filterVariant: "range" },
      }),
      columnHelper.accessor("maxAngle", {
        header: t(strings.slopeTable.headers.maxAngle),
        cell: (info) => <div className="text-right">{info.getValue() ?? "-"}</div>,
        enableSorting: true,
        sortUndefined: "last",
        filterFn: "inNumberRange",
        meta: { filterVariant: "range" },
      }),
    ],
    [t]
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel<SlopeRow>(),
    getFilteredRowModel: getFilteredRowModel<SlopeRow>(),
    getSortedRowModel: getSortedRowModel<SlopeRow>(),
    getFacetedUniqueValues: getFacetedUniqueValues<SlopeRow>(),
  });

  return (
    <div className="max-h-[70vh] overflow-auto">
      <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
        <thead className="sticky top-0 z-10 bg-white shadow-sm dark:bg-slate-900">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="sticky top-0 bg-inherit px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                >
                  <div
                    className={`${
                      header.column.getCanSort()
                        ? "flex cursor-pointer select-none items-center gap-2"
                        : "flex items-center gap-2"
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                    {{
                      asc: <FaSortUp />,
                      desc: <FaSortDown />,
                    }[header.column.getIsSorted() as string] ?? null}
                    {header.column.getCanSort() && !header.column.getIsSorted() ? <FaSort /> : null}
                  </div>
                  {header.column.getCanFilter() ? (
                    <div className="pt-2">
                      <Filter column={header.column} locale={locale} />
                    </div>
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="transition-colors odd:bg-white even:bg-slate-50/60 hover:bg-slate-100 dark:odd:bg-transparent dark:even:bg-slate-900/40 dark:hover:bg-slate-800/60"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-3 text-sm text-slate-700 dark:text-slate-200">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SlopeTable;
