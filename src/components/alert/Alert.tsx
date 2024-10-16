// import {
//   Alert as MaterialTailwindAlert,
//   AlertProps as MaterialTailwindAlertProps
// } from '@material-tailwind/react';
// import { TriangleExclamationIcon } from '../icons/triangleExclamation/TriangleExclamation';
// import { CircleInfoIcon } from '../icons/circleInfo/CircleInfo';
// import { CircleXmarkIcon } from '../icons/circleXmark/CircleXmark';
// import { CircleCheckIcon } from '../icons/circleCheck/CircleCheck';

// type AlertBaseProps = Pick<
//   MaterialTailwindAlertProps,
//   'onClose' | 'action' | 'animate' | 'open' | 'children'
// >;

// export interface AlertProps extends AlertBaseProps {
//   intent: 'info' | 'warning' | 'error' | 'success';
// }

// export const Alert = ({ intent, ...rest }: AlertProps) => {
//   return (
//     <>
//       {intent === 'info' && (
//         <MaterialTailwindAlert
//           className='bg-[#f5f5f5] border-[1px] border-[#d1d1d1] text-[#000000]'
//           icon={<CircleInfoIcon color='#616161' size='xl' />}
//           {...rest}
//         />
//       )}
//       {intent === 'warning' && (
//         <MaterialTailwindAlert
//           className='bg-[#fff9f5] border-[1px] border-[#fdcfb4] text-[#000000]'
//           icon={<TriangleExclamationIcon color='#bc4b09' size='xl' />}
//           {...rest}
//         />
//       )}
//       {intent === 'error' && (
//         <MaterialTailwindAlert
//           className='bg-[#fdf3f4] border-[1px] border-[#eeacb2] text-[#000000]'
//           icon={<CircleXmarkIcon color='#b10e1c' size='xl' />}
//           {...rest}
//         />
//       )}
//       {intent === 'success' && (
//         <MaterialTailwindAlert
//           className='bg-[#f1faf1] border-[1px] border-[#9fd89f] text-[#000000]'
//           icon={<CircleCheckIcon color='#0e700e' size='xl' />}
//           {...rest}
//         />
//       )}
//     </>
//   );
// };

import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps
} from '@mui/material';
import { TriangleExclamationIcon } from '../icons/triangleExclamation/TriangleExclamation';
import { CircleInfoIcon } from '../icons/circleInfo/CircleInfo';
import { CircleXmarkIcon } from '../icons/circleXmark/CircleXmark';
import { CircleCheckIcon } from '../icons/circleCheck/CircleCheck';
import { Typography } from '../typography/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type AlertTitleBaseProps = MuiAlertTitleProps;

export interface AlertTitleProps extends AlertTitleBaseProps {}

export const AlertTitle = ({ ...rest }: AlertTitleProps) => {
  return <MuiAlertTitle {...rest} />;
};

type AlertBaseProps = MuiAlertProps;

export interface AlertProps extends AlertBaseProps {}

export const Alert = ({ children, icon, severity, ...rest }: AlertProps) => {
  return (
    <ThemeProvider theme={theme}>
      {severity === 'error' && (
        <MuiAlert
          color='error'
          icon={<CircleXmarkIcon color='#b10e1c' size='1x' />}
          severity='info'
          {...rest}
        >
          <Typography>{children}</Typography>
        </MuiAlert>
      )}
      {severity === 'info' && (
        <MuiAlert
          color='info'
          icon={<CircleInfoIcon color='#616161' size='2x' />}
          severity='info'
          {...rest}
        >
          <Typography>{children}</Typography>
        </MuiAlert>
      )}
      {severity === 'success' && (
        <MuiAlert
          color='success'
          icon={<CircleCheckIcon color='#0e700e' size='2x' />}
          severity='info'
          {...rest}
        >
          <Typography>{children}</Typography>
        </MuiAlert>
      )}
      {severity === 'warning' && (
        <MuiAlert
          color='warning'
          icon={<TriangleExclamationIcon color='#bc4b09' size='2x' />}
          severity='info'
          {...rest}
        >
          <Typography>{children}</Typography>
        </MuiAlert>
      )}
    </ThemeProvider>
  );
};
