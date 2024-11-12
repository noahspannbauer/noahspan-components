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

export interface TableProps extends TableBaseProps {}

export const Table = ({ ...rest }: TableProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTable {...rest} />
    </ThemeProvider>
  );
};
