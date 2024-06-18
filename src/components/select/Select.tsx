import {
  Select as MaterialTailwindSelect,
  SelectProps as MaterialTailwindSelectProps,
  Option as MaterialTailwindSelectOption,
  SelectOptionProps as MaterialTailwindSelectOptionProps
} from '@material-tailwind/react';

type SelectOptionBaseProps = Pick<
  MaterialTailwindSelectOptionProps,
  'value' | 'index' | 'disabled' | 'className' | 'children'
>;

export interface SelectOptionProps extends SelectOptionBaseProps {}

export const Option = ({ ...rest }: SelectOptionProps) => {
  return <MaterialTailwindSelectOption {...rest} />;
};

type SelectBaseProps = Pick<
  MaterialTailwindSelectProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'label'
  | 'error'
  | 'success'
  | 'arrow'
  | 'value'
  | 'onChange'
  | 'selected'
  | 'offset'
  | 'dismiss'
  | 'animate'
  | 'lockScroll'
  | 'containerProps'
  | 'labelProps'
  | 'menuProps'
  | 'disabled'
  | 'name'
  | 'className'
  | 'children'
>;

export interface SelectProps extends SelectBaseProps {}

export const Select = ({ ...rest }: SelectProps) => {
  return <MaterialTailwindSelect {...rest} />;
};
