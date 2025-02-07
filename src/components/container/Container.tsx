import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps
} from '@mui/material';

type ContainerBaseProps = MuiContainerProps;

export interface ContainerProps extends ContainerBaseProps {}

export const Container = ({ ...rest }: ContainerProps) => {
  return <MuiContainer {...rest} />;
};
