// import {
//   Alert as MuiAlert,
//   AlertProps as MuiAlertProps,
//   AlertTitle as MuiAlertTitle,
//   AlertTitleProps as MuiAlertTitleProps
// } from '@mui/material';
// import { Icon, IconName } from '../icon/Icon';
// import { Typography } from '../typography/Typography';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';

// type AlertTitleBaseProps = MuiAlertTitleProps;

// export interface AlertTitleProps extends AlertTitleBaseProps {}

// export const AlertTitle = ({ ...rest }: AlertTitleProps) => {
//   return <MuiAlertTitle {...rest} />;
// };

// type AlertBaseProps = MuiAlertProps;

// export interface AlertProps extends AlertBaseProps {}

// export const Alert = ({ children, icon, severity, ...rest }: AlertProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       {severity === 'error' && (
//         <MuiAlert
//           color='error'
//           icon={
//             <Icon iconName={IconName.CIRCLE_XMARK} color='#b10e1c' size='1x' />
//           }
//           severity='info'
//           {...rest}
//         >
//           <Typography>{children}</Typography>
//         </MuiAlert>
//       )}
//       {severity === 'info' && (
//         <MuiAlert
//           color='info'
//           icon={
//             <Icon iconName={IconName.CIRCLE_INFO} color='#616161' size='1x' />
//           }
//           severity='info'
//           {...rest}
//         >
//           <Typography>{children}</Typography>
//         </MuiAlert>
//       )}
//       {severity === 'success' && (
//         <MuiAlert
//           color='success'
//           icon={
//             <Icon iconName={IconName.CIRCLE_CHECK} color='#0e700e' size='1x' />
//           }
//           severity='info'
//           {...rest}
//         >
//           <Typography>{children}</Typography>
//         </MuiAlert>
//       )}
//       {severity === 'warning' && (
//         <MuiAlert
//           color='warning'
//           icon={
//             <Icon
//               iconName={IconName.TRANGLE_EXCLAMATION}
//               color='#bc4b09'
//               size='1x'
//             />
//           }
//           severity='info'
//           {...rest}
//         >
//           <Typography>{children}</Typography>
//         </MuiAlert>
//       )}
//     </ThemeProvider>
//   );
// };

import {
  Alert as HeroUIAlert,
  AlertProps as HeroUIAlertProps,
  HeroUIProvider
} from '@heroui/react';

type BaseAlertProps = HeroUIAlertProps;

export interface AlertProps extends BaseAlertProps {}

export const Alert = ({ ...rest }: AlertProps) => {
  return (
    <HeroUIProvider>
      <HeroUIAlert {...rest} />
    </HeroUIProvider>
  );
};
