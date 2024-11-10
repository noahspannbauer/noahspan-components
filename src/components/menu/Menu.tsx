import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type ListItemIconBaseProps = MuiListItemIconProps;

export interface ListItemIconProps extends ListItemIconBaseProps {}

export const ListItemIcon = ({ ...rest }: ListItemIconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiListItemIcon {...rest} />
    </ThemeProvider>
  );
};

type ListItemTextBaseProps = MuiListItemTextProps;

export interface ListItemTextProps extends ListItemTextBaseProps {}

export const ListItemText = ({ ...rest }: ListItemTextProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiListItemText {...rest} />
    </ThemeProvider>
  );
};

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
