import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps
} from '@mui/material';

type IconButtonBaseProps = MuiIconButtonProps;

export interface IconButtonProps extends IconButtonBaseProps {}

export const IconButton = ({ ...rest }: IconButtonProps) => {
  return <MuiIconButton {...rest} />;
};
