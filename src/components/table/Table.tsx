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
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps
} from '@mui/material';
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
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

export type { CellContext };
export type { ColumnDef };
export type { HeaderContext };

type TableBodyBaseProps = MuiTableBodyProps;

export interface TableBodyProps extends TableBodyBaseProps {}

export const TableBody = ({ ...rest }: TableBodyProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableBody {...rest} />
    </ThemeProvider>
  );
};

type TableCellBaseProps = MuiTableCellProps;

export interface TableCellProps extends TableCellBaseProps {}

export const TableCell = ({ ...rest }: TableCellProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableCell {...rest} />
    </ThemeProvider>
  );
};

type TableContainerBaseProps = MuiTableContainerProps;

export interface TableContainerProps extends TableContainerBaseProps {}

export const TableContainer = ({ ...rest }: TableContainerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableContainer {...rest} />
    </ThemeProvider>
  );
};

type TableHeadBaseProps = MuiTableHeadProps;

export interface TableHeadProps extends TableHeadBaseProps {}

export const TableHead = ({ ...rest }: TableHeadProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableHead {...rest} />
    </ThemeProvider>
  );
};

type TablePaginationBaseProps = MuiTablePaginationProps;

export type TablePaginationProps = TablePaginationBaseProps;

export const TablePagination = ({ ...rest }: TablePaginationProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTablePagination {...rest} />
    </ThemeProvider>
  );
};

type TableRowBaseProps = MuiTableRowProps;

export interface TableRowProps extends TableRowBaseProps {}

export const TableRow = ({ ...rest }: TableRowProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTableRow {...rest} />
    </ThemeProvider>
  );
};

type TableBaseProps = MuiTableProps;

export interface TableProps extends TableBaseProps {
  columns: any;
  data: any;
}

export const Table = ({ columns, data, ...rest }: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const { pageSize, pageIndex } = table.getState().pagination;

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <MuiTable {...rest}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell
                      key={header.id}
                      colSpan={header.colSpan}
                      align={header.column.columnDef.meta?.headerAlign}
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
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            <>
              {table.getRowModel().rows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell
                          key={cell.id}
                          align={cell.column.columnDef.meta?.align}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </>
          </TableBody>
          <TableHead>
            {table.getFooterGroups().map((footerGroup, index) => {
              if (index === 0) {
                return (
                  <TableRow key={footerGroup.id}>
                    {footerGroup.headers.map((header) => {
                      return (
                        <TableCell
                          key={header.id}
                          align={header.column.columnDef.meta?.align}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              }
            })}
          </TableHead>
        </MuiTable>
      </TableContainer>
      <TablePagination
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
      />
    </ThemeProvider>
  );
};
