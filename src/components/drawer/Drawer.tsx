import {
  Drawer as MaterialTailwindDrawer,
  DrawerProps as MaterialTailwindDrawerProps
} from '@material-tailwind/react';

type DrawerBaseProps = Pick<
  MaterialTailwindDrawerProps,
  | 'open'
  | 'size'
  | 'placement'
  | 'overlay'
  | 'overlayRef'
  | 'overlayProps'
  | 'dismiss'
  | 'onClose'
  | 'transition'
  | 'className'
  | 'children'
>;

export interface DrawerProps extends DrawerBaseProps {}

export const Drawer = ({ ...rest }: DrawerBaseProps) => {
  return <MaterialTailwindDrawer {...rest} />;
};
