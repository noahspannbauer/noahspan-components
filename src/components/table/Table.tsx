// import {
//     Table as NextUITable,
//     TableProps as NextUITableProps,
//     TableBody as NextUITableBody,
//     TableBodyProps as NextUITableBodyProps,
//     TableCell as NextUITableCell,
//     TableCellProps as NextUITableCellProps,
//     TableColumn as NextUITableColumn,
//     TableColumnProps as NextUITableColumnProps,
//     TableHeader as NextUITableHeader,
//     TableHeaderProps as NextUITableHeaderProps,
//     TableRow as NextUITableRow,
//     TableRowProps as NextUITableRowProps
// } from '@nextui-org/react';
// import {
//     flexRender,
//     getCoreRowModel,
//     useReactTable,
//     ColumnDef,
//     getSortedRowModel,
//     SortingState
// } from "@tanstack/react-table";

// type ColumnDefProps = {
//     cellProps?: NextUITableCellProps;
// }

// export interface TableBodyProps extends NextUITableBodyProps<unknown> {}

// export const TableBody = ({ ...rest }: TableBodyProps) => {
//     return <NextUITableBody {...rest} />;
// }

// export interface TableCellProps extends NextUITableCellProps {}

// export const TableCell = ({ ...rest }: TableCellProps) => {
//     return <NextUITableCell {...rest} />;
// }

// export interface TableColumnProps extends NextUITableColumnProps<unknown> {}

// export const TableColumn = ({ ...rest }: TableColumnProps) => {
//     return <NextUITableColumn {...rest} />;
// }

// export interface TableHeaderProps extends NextUITableHeaderProps<unknown> {}

// export const TableHeader = ({ children, ...rest }: TableHeaderProps) => {
//     return (
//         <NextUITableHeader {...rest}>
//             {children}
//         </NextUITableHeader>
//     )
// }

// export interface TableRowProps extends NextUITableRowProps {}

// export const TableRowProps = ({ ...rest }: TableRowProps) => {
//     return <NextUITableRow {...rest} />
// }

// export type TableColumnDef = ColumnDef<unknown, unknown> & ColumnDefProps;

// export interface TableProps extends NextUITableProps {}

// export const Table = ({ ...rest }: TableProps) => {
//     return (
//         <div>
//             <NextUITable {...rest}>
//                 <NextUITableHeader>
//                     {table.getHeaderGroups().map((headerGroup) => (
//                         <NextUITableRow key={headerGroup.id}>
//                             {headerGroup.headers.map((header) => {
//                                 const columnDef: TableColumnDef = header.column.columnDef as TableColumnDef

//                                 return (
//                                     <NextUITableColumn
//                                         className={
//                                             header.column.getCanSort() ? 'cursor-pointer select-none' : ''
//                                         }
//                                         key={header.id}
//                                         onClick={header.column.getToggleSortingHandler()}
//                                         sorted={
//                                             header.column.getIsSorted() === 'asc'
//                                             ? 'ascending'
//                                             : header.column.getIsSorted() === 'desc'
//                                             ? 'descending'
//                                             : undefined
//                                         }
//                                     >
//                                         {header.isPlaceholder
//                                             ? null
//                                             : flexRender(columnDef.header, header.getContext())
//                                         }
//                                     </NextUITableColumn>
//                                 )
//                             })}
//                         </NextUITableRow>
//                     ))}
//                 </NextUITableHeader>
//             </NextUITable>
//         </div>
//     )
// }
