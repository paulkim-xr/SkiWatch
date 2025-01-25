import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";
import { tableData } from "./tableData";
import TableHeader from "./TableHeader";
import "./styles.css";

function App() {
  const [data] = useState([...tableData]);

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("name", {
      header: "이름",
      filterFn: "equalsString",
      size: 60
    }),
    columnHelper.accessor("phone", {
      header: "휴대폰",
      enableColumnFilter: false,
      size: 300,
      enableSorting: false,
      cell: ({ renderValue }) =>
        renderValue().replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3")
    }),
    columnHelper.accessor("birth", {
      header: "생년월일",
      enableColumnFilter: false,
      size: 80
    }),
    columnHelper.accessor("register_date", {
      header: "등록일",
      enableColumnFilter: false,
      size: 120
    }),
    columnHelper.accessor("last_edit_date", {
      header: "최종수정일",
      enableColumnFilter: false,
      size: 120
    })
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHeader header={header} key={header.id} />
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
