import { useEffect, useState } from 'react';
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
  | 'disabled'
  | 'value'
  | 'onChange'
  | 'onBlur'
  | 'name'
>;

export interface InputProps extends InputBaseProps {
  helperText?: string;
}

export const Input = ({ helperText, ...rest }: InputProps) => {
  const [props, setProps] = useState<InputProps>(rest);

  useEffect(() => {
    if (!rest.label) {
      const newProps = { ...rest };

      if (!newProps.error) {
        newProps.className = `${newProps.className ? newProps.className : ''} !border-t-blue-gray-200 focus:!border-t-gray-900`;
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
      <MaterialTailwindInput {...props} />
      {helperText && helperText.length > 0 && (
        <span className='absolue mt-3 mr-1 mb-0 ml-3 text-xs text-red-500'>
          {helperText}
        </span>
      )}
    </div>
  );
};
