import {
  Input as MaterialTailwindInput,
  InputProps as MaterialTailwindInputProps
} from '@material-tailwind/react';

type InputBaseProps = Pick<
  MaterialTailwindInputProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'label'
  | 'error'
  | 'success'
  | 'icon'
  | 'labelProps'
  | 'containerProps'
  | 'className'
  | 'shrink'
  | 'inputRef'
  | 'placeholder'
>;

export interface InputProps extends InputBaseProps {}

export const Input = ({ ...rest }: InputProps) => {
  return <MaterialTailwindInput crossOrigin={undefined} {...rest} />;
};
