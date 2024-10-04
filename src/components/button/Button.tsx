import {
  Button as MaterialTailwindButton,
  ButtonProps as MaterialTailwindButtonProps
} from '@material-tailwind/react';

type ButtonBaseProps = Pick<
  MaterialTailwindButtonProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'fullWidth'
  | 'ripple'
  | 'className'
  | 'children'
  | 'loading'
  | 'onClick'
  | 'type'
  | 'disabled'
>;

export interface ButtonProps extends ButtonBaseProps {}

export const Button = ({ ...rest }: ButtonProps) => {
  return <MaterialTailwindButton {...rest} />;
};
