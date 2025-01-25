import { flexRender } from "@tanstack/react-table";
import { useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import styled from "styled-components";

function TableHeader({ header }) {
  const sortedUniqueValues = useMemo(
    () => Array.from(header.column.getFacetedUniqueValues().keys()).sort(),
    [header.column]
  );

  const onFilterChange = (value) => {
    if (value === "null") {
      header.column.setFilterValue(null);
    } else {
      header.column.setFilterValue(value);
    }
  };

  return (
    <th key={header.id}>
      <ThWrapper>
        <Sorter
          width={header.getSize()}
          isSortable={header.column.getCanSort()}
          onClick={header.column.getToggleSortingHandler()}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
          {
            {
              asc: <FaSortUp />,
              desc: <FaSortDown />
            }[header.column.getIsSorted()]
          }
          {header.column.getCanSort() && !header.column.getIsSorted() ? (
            <FaSort />
          ) : null}
        </Sorter>
        <ColumnFilter>
          {header.column.getCanFilter() ? (
            <select
              onChange={({ currentTarget: { value } }) => onFilterChange(value)}
            >
              <option value="null">선택 안함</option>
              {sortedUniqueValues.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          ) : null}
        </ColumnFilter>
      </ThWrapper>
    </th>
  );
}

const ThWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const Sorter = styled.div`
  width: ${({ width }) => width};
  cursor: ${({ isSortable }) => (isSortable ? "pointer" : "default")};
`;
const ColumnFilter = styled.div`
  select {
    border: none;
    background-color: transparent;
  }
`;

export default TableHeader;
