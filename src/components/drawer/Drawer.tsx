// import {
//   IconButton,
//   Drawer as MaterialTailwindDrawer,
//   DrawerProps as MaterialTailwindDrawerProps
// } from '@material-tailwind/react';
// import { Typography } from '../typography/Typography';
// import { XmarkIcon } from '../icons/xMark/XmarkIcon';

// export interface DrawerBodyProps {
//   className?: string;
//   children: React.ReactNode;
// }

// export const DrawerBody = ({
//   className,
//   children,
//   ...rest
// }: DrawerBodyProps) => {
//   return (
//     <div className={className} {...rest}>
//       {children}
//     </div>
//   );
// };

// export interface DrawerFooterProps {
//   className?: string;
//   children: React.ReactNode;
// }

// export const DrawerFooter = ({
//   className,
//   children,
//   ...rest
// }: DrawerFooterProps) => {
//   return (
//     <div className={className} {...rest}>
//       {children}
//     </div>
//   );
// };

// export interface DrawerHeaderProps {
//   text: string;
//   onClose: () => void;
// }

// export const DrawerHeader = ({ text, onClose, ...rest }: DrawerHeaderProps) => {
//   return (
//     <div className='mb-6 flex items-center justify-between' {...rest}>
//       <Typography variant='h3'>{text}</Typography>
//       <IconButton variant='text' onClick={onClose}>
//         <XmarkIcon />
//       </IconButton>
//     </div>
//   );
// };

// type DrawerBaseProps = Pick<
//   MaterialTailwindDrawerProps,
//   | 'open'
//   | 'size'
//   | 'placement'
//   | 'overlay'
//   | 'overlayRef'
//   | 'overlayProps'
//   | 'dismiss'
//   | 'onClose'
//   | 'transition'
//   | 'className'
//   | 'children'
// >;

// export interface DrawerProps extends DrawerBaseProps {}

// export const Drawer = ({ ...rest }: DrawerBaseProps) => {
//   return (
//     <MaterialTailwindDrawer
//       className='p-10 overflow-y-auto !z-[9995]'
//       {...rest}
//     />
//   );
// };

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
