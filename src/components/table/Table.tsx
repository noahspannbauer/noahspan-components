import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getSortedRowModel,
  SortingState
} from '@tanstack/react-table';

interface TableHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const TableHeader = ({ className, children, ...rest }: TableHeaderProps) => {
  return (
    <thead className={className} {...rest}>
      {children}
    </thead>
  );
};

interface TableHeaderCellProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: unknown) => void;
}

const TableHeaderCell = ({
  className,
  children,
  onClick,
  ...rest
}: TableHeaderCellProps) => {
  return (
    <th className={className} onClick={onClick} {...rest}>
      {children}
    </th>
  );
};

interface TableBodyProps {
  children?: React.ReactNode;
}

const TableBody = ({ children, ...rest }: TableBodyProps) => {
  return <tbody {...rest}>{children}</tbody>;
};

interface TableRowProps {
  className?: string;
  children?: React.ReactNode;
}

const TableRow = ({ className, children, ...rest }: TableRowProps) => {
  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  );
};

interface TableCellProps {
  className?: string;
  children?: React.ReactNode;
}

const TableCell = ({ className, children, ...rest }: TableCellProps) => {
  return (
    <td className={className} {...rest}>
      {children}
    </td>
  );
};

type ColumnDefProps = {
  cellProps?: TableCellProps;
};

export type TableColumnDef = ColumnDef<unknown, unknown> & ColumnDefProps;

export interface TableProps {
  defaultData: unknown[];
  columns: TableColumnDef[];
  headerProps?: TableHeaderProps;
  rowProps?: TableRowProps;
}

export const Table = ({
  defaultData,
  columns,
  headerProps,
  rowProps,
  ...rest
}: TableProps) => {
  const [data, _setData] = useState(() => [...defaultData]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div>
      <table
        className='w-full min-w-max table-auto text-left border border-blue-gray-100 rounded-sm'
        {...rest}
      >
        <TableHeader {...headerProps}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                const columnDef: TableColumnDef = header.column
                  .columnDef as TableColumnDef;

                return (
                  <TableHeaderCell
                    className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    // sorted={
                    //   header.column.getIsSorted() === 'asc'
                    //     ? 'ascending'
                    //     : header.column.getIsSorted() === 'desc'
                    //     ? 'descending'
                    //     : undefined
                    // }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(columnDef.header, header.getContext())}
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row, index) => {
            const isLast = index === table.getRowModel().rows.length - 1;
            const styles = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

            return (
              <TableRow key={row.id} {...rowProps}>
                {row.getVisibleCells().map((cell) => {
                  const columnDef: TableColumnDef = cell.column
                    .columnDef as TableColumnDef;

                  return (
                    <TableCell
                      className={`${styles} ${columnDef.cellProps?.className}`}
                      key={cell.id}
                    >
                      {flexRender(columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </table>
    </div>
  );
};
