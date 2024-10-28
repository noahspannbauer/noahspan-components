import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getSortedRowModel,
  SortingState
} from '@tanstack/react-table';
import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableBody as MuiTableBody,
  TableBodyProps as MuiTableBodyProps,
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps,
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps
} from '@mui/material';
import { SxProps, ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Typography } from '../typography/Typography';

type TableBaseProps = MuiTableProps;

interface TableProps extends TableBaseProps {}

const Table = ({ ...rest }: TableProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTable {...rest} />
    </ThemeProvider>
  );
};

type TableBodyBaseProps = MuiTableBodyProps;

interface TableBodyProps extends TableBodyBaseProps {}

const TableBody = ({ ...rest }: TableBodyProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableBody {...rest} />
    </ThemeProvider>
  );
};

type TableCellBaseProps = MuiTableCellProps;

interface TableCellProps extends TableCellBaseProps {}

const TableCell = ({ ...rest }: TableCellProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableCell {...rest} />
    </ThemeProvider>
  );
};

type TableContainerBaseProps = MuiTableContainerProps;

interface TableContainerProps extends TableContainerBaseProps {}

const TableContainer = ({ ...rest }: TableContainerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableContainer {...rest} />
    </ThemeProvider>
  );
};

type TableHeadBaseProps = MuiTableHeadProps;

interface TableHeadProps extends TableHeadBaseProps {}

const TableHead = ({ ...rest }: TableHeadProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableHead {...rest} />
    </ThemeProvider>
  );
};

type TableRowBaseProps = MuiTableRowProps;

interface TableRowProps extends TableRowBaseProps {}

const TableRow = ({ ...rest }: TableRowProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableRow {...rest} />
    </ThemeProvider>
  );
};

type ColumnDefProps = {
  cellProps?: TableCellProps;
  headerCellProps?: TableCellProps;
};

export type TableColumnDef = ColumnDef<unknown, unknown> & ColumnDefProps;

export interface DataTableProps {
  defaultData: unknown[];
  columns: TableColumnDef[];
  headerProps?: TableHeadProps;
  rowProps?: TableRowProps;
}

export const DataTable = ({
  defaultData,
  columns,
  headerProps,
  rowProps
}: DataTableProps) => {
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
    <TableContainer>
      <Table>
        <TableHead {...headerProps}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                const columnDef: TableColumnDef = header.column
                  .columnDef as TableColumnDef;
                let styles: SxProps = {
                  backgroundColor: '#ECEFF1',
                  textTransform: 'capitalize'
                };

                if (index === 0) {
                  styles = {
                    ...styles,
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px'
                  };
                } else if (index === headerGroup.headers.length - 1) {
                  styles = {
                    ...styles,
                    borderBottomRightRadius: '8px',
                    borderTopRightRadius: '8px'
                  };
                }

                return (
                  <TableCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    // sorted={
                    //   header.column.getIsSorted() === 'asc'
                    //     ? 'ascending'
                    //     : header.column.getIsSorted() === 'desc'
                    //     ? 'descending'
                    //     : undefined
                    // }
                    sx={styles}
                    {...columnDef.headerCellProps}
                  >
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                      }}
                      variant='caption'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(columnDef.header, header.getContext())}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id} {...rowProps}>
                {row.getVisibleCells().map((cell) => {
                  const columnDef: TableColumnDef = cell.column
                    .columnDef as TableColumnDef;

                  return (
                    <TableCell key={cell.id} {...columnDef.cellProps}>
                      {flexRender(columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// interface TableHeaderProps {
//   className?: string;
//   children?: React.ReactNode;
// }

// const TableHeader = ({ className, children, ...rest }: TableHeaderProps) => {
//   return (
//     <thead className={className} {...rest}>
//       {children}
//     </thead>
//   );
// };

// interface TableHeaderCellProps {
//   className?: string;
//   children?: React.ReactNode;
//   onClick?: (event: unknown) => void;
// }

// const TableHeaderCell = ({
//   className,
//   children,
//   onClick,
//   ...rest
// }: TableHeaderCellProps) => {
//   return (
//     <th className={className} onClick={onClick} {...rest}>
//       {children}
//     </th>
//   );
// };

// interface TableBodyProps {
//   children?: React.ReactNode;
// }

// const TableBody = ({ children, ...rest }: TableBodyProps) => {
//   return <tbody {...rest}>{children}</tbody>;
// };

// interface TableRowProps {
//   className?: string;
//   children?: React.ReactNode;
// }

// const TableRow = ({ className, children, ...rest }: TableRowProps) => {
//   return (
//     <tr className={className} {...rest}>
//       {children}
//     </tr>
//   );
// };

// interface TableCellProps {
//   className?: string;
//   children?: React.ReactNode;
// }

// const TableCell = ({ className, children, ...rest }: TableCellProps) => {
//   return (
//     <td className={className} {...rest}>
//       {children}
//     </td>
//   );
// };

// export const Table = ({
//   defaultData,
//   columns,
//   headerProps,
//   rowProps,
//   ...rest
// }: TableProps) => {
//   const [data, _setData] = useState(() => [...defaultData]);
//   const [sorting, setSorting] = useState<SortingState>([]);

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       sorting
//     },
//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel()
//   });

//   return (
//     <div>
//       <table className='w-full min-w-max table-auto text-left' {...rest}>
//         <TableHeader className='mb-2' {...headerProps}>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header, index) => {
//                 const columnDef: TableColumnDef = header.column
//                   .columnDef as TableColumnDef;
//                 let styles = 'bg-blue-gray-50 p-3 uppercase font-bold text-xs';

//                 if (index === 0) {
//                   styles = `${styles} rounded-l-lg`;
//                 } else if (index === headerGroup.headers.length - 1) {
//                   styles = `${styles} rounded-r-lg`;
//                 }

//                 return (
//                   <TableHeaderCell
//                     className={styles}
//                     key={header.id}
//                     onClick={header.column.getToggleSortingHandler()}
//                     // sorted={
//                     //   header.column.getIsSorted() === 'asc'
//                     //     ? 'ascending'
//                     //     : header.column.getIsSorted() === 'desc'
//                     //     ? 'descending'
//                     //     : undefined
//                     // }
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(columnDef.header, header.getContext())}
//                   </TableHeaderCell>
//                 );
//               })}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody>
//           {table.getRowModel().rows.map((row) => {
//             return (
//               <TableRow key={row.id} {...rowProps}>
//                 {row.getVisibleCells().map((cell) => {
//                   const columnDef: TableColumnDef = cell.column
//                     .columnDef as TableColumnDef;

//                   return (
//                     <TableCell
//                       className={`p-4 ${columnDef.cellProps?.className}`}
//                       key={cell.id}
//                     >
//                       {flexRender(columnDef.cell, cell.getContext())}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </table>
//     </div>
//   );
// };
