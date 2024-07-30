import { useEffect, useState } from 'react';
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

export interface SelectProps extends SelectBaseProps {
  helperText?: string;
}

export const Select = ({ helperText, ...rest }: SelectProps) => {
  const [props, setProps] = useState<SelectProps>(rest);

  useEffect(() => {
    if (!rest.label) {
      const newProps = { ...rest };

      if (!newProps.error) {
        newProps.className = `${newProps.className ? newProps.className : ''} !border-blue-gray-200 focus:!border-gray-900`;
        newProps.labelProps = {
          ...newProps.labelProps,
          className: 'before:content-none after:content-none'
        };
      } else {
        newProps.className = `${newProps.className ? newProps.className : ''} !border-t-red-500 focus:!border-red-500`;
        newProps.labelProps = {
          ...newProps.labelProps,
          className: 'before:content-none after:content-none'
        };
      }

      setProps(newProps);
    }
  }, [rest.className, rest.label, rest.labelProps]);

  return (
    <div className='relative'>
      <MaterialTailwindSelect {...props} />
      {helperText && helperText.length > 0 && (
        <span className='absolue mt-3 mr-1 mb-0 ml-3 text-xs text-red-500'>
          {helperText}
        </span>
      )}
    </div>
  );
};
