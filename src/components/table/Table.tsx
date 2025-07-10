// import {
//   Table as MuiTable,
//   TableProps as MuiTableProps,
//   TableBody as MuiTableBody,
//   TableBodyProps as MuiTableBodyProps,
//   TableCell as MuiTableCell,
//   TableCellProps as MuiTableCellProps,
//   TableContainer as MuiTableContainer,
//   TableContainerProps as MuiTableContainerProps,
//   TableHead as MuiTableHead,
//   TableHeadProps as MuiTableHeadProps,
//   TablePagination as MuiTablePagination,
//   TablePaginationProps as MuiTablePaginationProps,
//   TableRow as MuiTableRow,
//   TableRowProps as MuiTableRowProps
// } from '@mui/material';
import {
  Table as HeroUITable,
  TableProps as HeroUITableProps,
  TableBody as HeroUITableBody,
  TableColumn as HeroUITableColumn,
  TableColumnProps as HeroUITableColumnProps,
  TableBodyProps as HeroUITableBodyProps,
  TableCell as HeroUITableCell,
  TableCellProps as HeroUITableCellProps,
  TableHeader as HeroUITableHeader,
  TableHeaderProps as HeroUITableHeaderProps,
  TableRow as HeroUITableRow,
  TableRowProps as HeroUITableRowProps,
  HeroUIProvider
} from '@heroui/react'
import { Paper } from '../paper/Paper';
import { TablePaginationActions } from './TablePaginationActions';
import {
  CellContext,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  HeaderContext,
  useReactTable
} from '@tanstack/react-table';

export type { CellContext };
export type { ColumnDef };
export type { HeaderContext };

type TableBodyBaseProps = Pick<HeroUITableBodyProps<unknown>, 
  | 'children'
  | 'items'
  | 'isLoading'
  | 'loadingContent'
  | 'emptyContent'
>;

export interface TableBodyProps extends TableBodyBaseProps {}

export const TableBody = ({ ...rest }: TableBodyProps) => {
  return (
    <HeroUIProvider>
      <HeroUITableBody {...rest} />
    </HeroUIProvider>
  );
};

type TableCellBaseProps = HeroUITableCellProps;

export interface TableCellProps extends TableCellBaseProps {}

export const TableCell = ({ ...rest }: TableCellProps) => {
  return (
    <HeroUIProvider>
      <HeroUITableCell {...rest} />
    </HeroUIProvider> 
  );
};

type TableColumnBaseProps = Pick<
  HeroUITableColumnProps<unknown>,
  | 'children'
  | 'align'
  | 'hideHeader'
  | 'allowsSorting'
  | 'isRowHeader'
  | 'textValue'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
>;

export interface TableColumnProps extends TableColumnBaseProps {};

export const TableColumn = ({ ...rest }: TableColumnProps) => {
  return (
    <HeroUIProvider>
      <HeroUITableColumn {...rest} />
    </HeroUIProvider>
  )
}

// type TableContainerBaseProps = MuiTableContainerProps;

// export interface TableContainerProps extends TableContainerBaseProps {}

// export const TableContainer = ({ ...rest }: TableContainerProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiTableContainer {...rest} />
//     </ThemeProvider>
//   );
// };

type TableHeaderBaseProps = Pick<
  HeroUITableHeaderProps<unknown>,
  | 'children'
  | 'columns'  
>;

export interface TableHeaderProps extends TableHeaderBaseProps {}

export const TableHeader = ({ ...rest }: TableHeaderProps) => {
  return (
    <HeroUIProvider>
      <HeroUITableHeader {...rest} />
    </HeroUIProvider>
  );
};

// type TablePaginationBaseProps = MuiTablePaginationProps;

// export type TablePaginationProps = TablePaginationBaseProps;

// export const TablePagination = ({ ...rest }: TablePaginationProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiTablePagination {...rest} />
//     </ThemeProvider>
//   );
// };

type TableRowBaseProps = HeroUITableRowProps;

export interface TableRowProps extends TableRowBaseProps {}

export const TableRow = ({ ...rest }: TableRowProps) => {
  return (
    <HeroUIProvider>
      <HeroUITableRow {...rest} />
    </HeroUIProvider>
  );
};

// type TableBaseProps = Omit<
//   HeroUITableProps,
//   | 'children'
// >;

export interface TableProps {
  columns: any;
  data: any;
}

export const Table = ({ columns, data, ...rest }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const { pageSize, pageIndex } = table.getState().pagination;

  return (
    <HeroUIProvider>
        <HeroUITable>
          <HeroUITableHeader>
            <HeroUITableColumn>
              {table.getHeaderGroups().map((headerGroup) => (
                <HeroUITableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <HeroUITableCell
                        key={header.id}
                        // colSpan={header.colSpan}
                        // align={header.column.columnDef.meta?.headerAlign}
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {/* {header.column.getCanFilter() ? (
                              <div>
                                <Filter column={header.column} table={table} />
                              </div>
                            ) : null} */}
                          </div>
                        )}
                      </HeroUITableCell>
                    );
                  })}
                </HeroUITableRow>
              ))}
            </HeroUITableColumn>
          </HeroUITableHeader>
          <HeroUITableBody>
            <>
              {table.getRowModel().rows.map((row) => {
                return (
                  <HeroUITableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <HeroUITableCell
                          key={cell.id}
                          // align={cell.column.columnDef.meta?.align}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </HeroUITableCell>
                      );
                    })}
                  </HeroUITableRow>
                );
              })}
            </>
          </HeroUITableBody>
          <HeroUITableHeader>
            <HeroUITableColumn>
              {table.getFooterGroups().map((footerGroup, index) => {
                if (index === 0) {
                  return (
                    <HeroUITableRow key={footerGroup.id}>
                      {footerGroup.headers.map((header) => {
                        return (
                          <HeroUITableCell
                            key={header.id}
                            // align={header.column.columnDef.meta?.align}
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.footer,
                                  header.getContext()
                                )}
                          </HeroUITableCell>
                        );
                      })}
                    </HeroUITableRow>
                  );
                }
              })}
            </HeroUITableColumn>
          </HeroUITableHeader>
        </HeroUITable>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 50, { label: 'All', value: data.length }]}
        component='div'
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        slotProps={{
          select: {
            inputProps: { 'aria-label': 'rows per page' },
            native: true
          }
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page);
        }}
        onRowsPerPageChange={(event) => {
          const size = event.target.value ? Number(event.target.value) : 10;

          table.setPageSize(size);
        }}
        ActionsComponent={TablePaginationActions}
      /> */}
    </HeroUIProvider>
  );
};
