import {
  Menu as MaterialTailwindMenu,
  MenuProps as MaterialTailwindMenuProps,
  MenuHandler as MaterialTailwindMenuHandler,
  MenuHandlerProps as MaterialTailwindMenuHandlerProps,
  MenuItem as MaterialTailwindMenuItem,
  MenuItemProps as MaterialTailwindMenuItemProps,
  MenuList as MaterialTailwindMenuList,
  MenuListProps as MaterialTailwindMenuListProps
} from '@material-tailwind/react';

type MenuHandlerBaseProps = Pick<MaterialTailwindMenuHandlerProps, 'children'>;

export interface MenuHandlerProps extends MenuHandlerBaseProps {}

export const MenuHandler = ({ ...rest }: MenuHandlerProps) => {
  return <MaterialTailwindMenuHandler {...rest} />;
};

type MenuItemBaseProps = Pick<
  MaterialTailwindMenuItemProps,
  'disabled' | 'className' | 'children'
>;

export interface MenuItemProps extends MenuItemBaseProps {}

export const MenuItem = ({ ...rest }: MenuItemProps) => {
  return <MaterialTailwindMenuItem {...rest} />;
};

type MenuListBaseProps = Pick<
  MaterialTailwindMenuListProps,
  'className' | 'children'
>;

export interface MenuListProps extends MenuListBaseProps {}

export const MenuList = ({ ...rest }: MenuListProps) => {
  return <MaterialTailwindMenuList {...rest} />;
};

type MenuBaseProps = Pick<
  MaterialTailwindMenuProps,
  | 'open'
  | 'handler'
  | 'placement'
  | 'offset'
  | 'dismiss'
  | 'animate'
  | 'lockScroll'
  | 'allowHover'
  | 'children'
>;

export interface MenuProps extends MenuBaseProps {}

export const Menu = ({ ...rest }: MenuProps) => {
  return <MaterialTailwindMenu {...rest} />;
};
