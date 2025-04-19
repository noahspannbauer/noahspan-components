import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

type StackBaseProps = MuiStackProps;

export interface StackProps extends StackBaseProps {}

export const Stack = ({ ...rest }: StackProps) => {
  return <MuiStack {...rest} />;
};
