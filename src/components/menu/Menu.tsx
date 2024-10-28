import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type MenuItemBaseProps = MuiMenuItemProps;

export interface MenuItemProps extends MenuItemBaseProps {}

export const MenuItem = ({ ...rest }: MenuItemProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiMenuItem {...rest} />
    </ThemeProvider>
  );
};

type MenuBaseProps = MuiMenuProps;

export interface MenuProps extends MenuBaseProps {}

export const Menu = ({ ...rest }: MenuProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiMenu {...rest} />
    </ThemeProvider>
  );
};
