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
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Paper } from '../paper/Paper';
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
  columns: any[];
  headerProps?: TableHeadProps;
  rowProps?: TableRowProps;
}

export const DataTable = ({ defaultData, columns }: DataTableProps) => {
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ border: 'ActiveBorder' }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} sx={{ backgroundColor: '#eceff1' }}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableCell key={header.id} colSpan={header.colSpan}>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                      }}
                      variant='caption'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
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
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const columnDef: TableColumnDef = cell.column
                    .columnDef as TableColumnDef;

                  return (
                    <TableCell key={cell.id}>
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
