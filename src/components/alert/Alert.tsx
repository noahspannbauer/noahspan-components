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
          icon={<CircleInfoIcon color='#616161' size='1x' />}
          severity='info'
          {...rest}
        >
          <Typography>{children}</Typography>
        </MuiAlert>
      )}
      {severity === 'success' && (
        <MuiAlert
          color='success'
          icon={<CircleCheckIcon color='#0e700e' size='1x' />}
          severity='info'
          {...rest}
        >
          <Typography>{children}</Typography>
        </MuiAlert>
      )}
      {severity === 'warning' && (
        <MuiAlert
          color='warning'
          icon={<TriangleExclamationIcon color='#bc4b09' size='1x' />}
          severity='info'
          {...rest}
        >
          <Typography>{children}</Typography>
        </MuiAlert>
      )}
    </ThemeProvider>
  );
};
