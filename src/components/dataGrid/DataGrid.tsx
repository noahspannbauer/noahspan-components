import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColDef,
  GridColumnGroupingModel,
  GridColumnVisibilityModel,
  GridRowsProp
} from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

export type {
  GridColDef,
  GridColumnGroupingModel,
  GridColumnVisibilityModel,
  GridRowsProp
};

type DataGridBaseProps = MuiDataGridProps;

export interface DataGridProps extends DataGridBaseProps {}

export const DataGrid = ({ ...rest }: DataGridProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiDataGrid {...rest} />
    </ThemeProvider>
  );
};
