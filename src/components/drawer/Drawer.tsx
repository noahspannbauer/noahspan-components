import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type DrawerBaseProps = MuiDrawerProps;

export interface DrawerProps extends DrawerBaseProps {}

export const Drawer = ({ ...rest }: DrawerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiDrawer {...rest} />
    </ThemeProvider>
  );
};
