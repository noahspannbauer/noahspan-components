import {
  Drawer as MaterialTailwindDrawer,
  DrawerProps as MaterialTailwindDrawerProps
} from '@material-tailwind/react';

export interface DrawerBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const DrawerBody = ({
  className,
  children,
  ...rest
}: DrawerBodyProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export interface DrawerFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const DrawerFooter = ({
  className,
  children,
  ...rest
}: DrawerFooterProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export interface DrawerHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const DrawerHeader = ({
  className,
  children,
  ...rest
}: DrawerHeaderProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

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
