// import {
//   Menu as MaterialTailwindMenu,
//   MenuProps as MaterialTailwindMenuProps,
//   MenuHandler as MaterialTailwindMenuHandler,
//   MenuHandlerProps as MaterialTailwindMenuHandlerProps,
//   MenuItem as MaterialTailwindMenuItem,
//   MenuItemProps as MaterialTailwindMenuItemProps,
//   MenuList as MaterialTailwindMenuList,
//   MenuListProps as MaterialTailwindMenuListProps
// } from '@material-tailwind/react';

// type MenuHandlerBaseProps = Pick<MaterialTailwindMenuHandlerProps, 'children'>;

// export interface MenuHandlerProps extends MenuHandlerBaseProps {}

// export const MenuHandler = ({ ...rest }: MenuHandlerProps) => {
//   return <MaterialTailwindMenuHandler {...rest} />;
// };

// type MenuItemBaseProps = Pick<
//   MaterialTailwindMenuItemProps,
//   'disabled' | 'className' | 'children'
// >;

// export interface MenuItemProps extends MenuItemBaseProps {
//   onClick?: () => void;
// }

// export const MenuItem = ({ onClick, ...rest }: MenuItemProps) => {
//   return <MaterialTailwindMenuItem onClick={onClick} {...rest} />;
// };

// type MenuListBaseProps = Pick<
//   MaterialTailwindMenuListProps,
//   'className' | 'children'
// >;

// export interface MenuListProps extends MenuListBaseProps {}

// export const MenuList = ({ ...rest }: MenuListProps) => {
//   return <MaterialTailwindMenuList {...rest} />;
// };

// type MenuBaseProps = Pick<
//   MaterialTailwindMenuProps,
//   | 'open'
//   | 'handler'
//   | 'placement'
//   | 'offset'
//   | 'dismiss'
//   | 'animate'
//   | 'lockScroll'
//   | 'allowHover'
//   | 'children'
// >;

// export interface MenuProps extends MenuBaseProps {}

// export const Menu = ({ ...rest }: MenuProps) => {
//   return <MaterialTailwindMenu {...rest} />;
// };

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
