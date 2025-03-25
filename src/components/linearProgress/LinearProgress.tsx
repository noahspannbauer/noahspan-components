import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps
} from '@mui/material';

type LinearProgressBaseProps = MuiLinearProgressProps;

export interface LinearProgressProps extends LinearProgressBaseProps {}

export const LinearProgress = ({ ...rest }: LinearProgressProps) => {
  return <MuiLinearProgress {...rest} />;
};
