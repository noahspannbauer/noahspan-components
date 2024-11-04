import { Grid2 as MuiGrid, Grid2Props as MuiGridProps } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type GridBaseProps = MuiGridProps;

export interface GridProps extends GridBaseProps {}

export const Grid = ({ ...rest }: GridProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiGrid {...rest} />
    </ThemeProvider>
  );
};
