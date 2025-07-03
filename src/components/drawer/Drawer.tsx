// import {
//   Drawer as MuiDrawer,
//   DrawerProps as MuiDrawerProps
// } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';

// type DrawerBaseProps = MuiDrawerProps;

// export interface DrawerProps extends DrawerBaseProps {}

// export const Drawer = ({ ...rest }: DrawerProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiDrawer {...rest} />
//     </ThemeProvider>
//   );
// };

import {
  Drawer as HeroUIDrawer,
  DrawerProps as HeroUIDrawerProps,
  DrawerBody as HeroUIDrawerBody,
  DrawerBodyProps as HeroUIDrawerBodyProps,
  DrawerContent as HeroUIDrawerContent,
  DrawerContentProps as HeroUIDrawerContentProps,
  DrawerFooter as HeroUIDrawerFooter,
  DrawerFooterProps as HeroUIDrawerFooterProps,
  DrawerHeader as HeroUIDrawerHeader,
  DrawerHeaderProps as HeroUIDrawerHeaderProps,
  HeroUIProvider
} from '@heroui/react';

type DrawerBodyBaseProps = HeroUIDrawerBodyProps;

export interface DrawerBodyProps extends DrawerBodyBaseProps {}

export const DrawerBody = ({ ...rest }: DrawerBodyProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDrawerBody {...rest} />
    </HeroUIProvider>
  );
};

type DrawerContentBaseProps = HeroUIDrawerContentProps;

export interface DrawerContentProps extends DrawerContentBaseProps {}

export const DrawerContent = ({ ...rest }: DrawerContentProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDrawerContent {...rest} />
    </HeroUIProvider>
  );
};

type DrawerFooterBaseProps = HeroUIDrawerFooterProps;

export interface DrawerFooterProps extends DrawerFooterBaseProps {}

export const DrawerFooter = ({ ...rest }: DrawerFooterProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDrawerFooter {...rest} />
    </HeroUIProvider>
  );
};

type DrawerHeaderBaseProps = HeroUIDrawerHeaderProps;

export interface DrawerHeaderProps extends DrawerHeaderBaseProps {}

export const DrawerHeader = ({ ...rest }: DrawerHeaderProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDrawerHeader {...rest} />
    </HeroUIProvider>
  );
};

type DrawerBaseProps = HeroUIDrawerProps;

export interface DrawerProps extends DrawerBaseProps {}

export const Drawer = ({ ...rest }: DrawerProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDrawer {...rest} />
    </HeroUIProvider>
  );
};
