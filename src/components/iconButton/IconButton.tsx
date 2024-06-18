import {
  IconButton as MaterialTailwindIconButton,
  IconButtonProps as MaterialTailwindIconButtonProps
} from '@material-tailwind/react';

type IconButtonBaseProps = Pick<
  MaterialTailwindIconButtonProps,
  'variant' | 'size' | 'color' | 'ripple' | 'className' | 'children' | 'onClick'
>;

export interface IconButtonProps extends IconButtonBaseProps {}

export const IconButton = ({ ...rest }: IconButtonProps) => {
  return <MaterialTailwindIconButton {...rest} />;
};
