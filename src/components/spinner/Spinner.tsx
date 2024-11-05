import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps
} from '@mui/material';

type SpinnerBaseProps = MuiCircularProgressProps;

export interface SpinnerProps extends SpinnerBaseProps {}

export const Spinner = ({ ...rest }: SpinnerProps) => {
  return <MuiCircularProgress {...rest} />;
};
