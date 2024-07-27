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
  return (
    <div className='relative'>
      <MaterialTailwindInput crossOrigin={undefined} {...rest} />
      {helperText && helperText.length > 0 && (
        <span className='absolue mt-3 mr-1 mb-0 ml-3 text-xs text-red-500'>
          {helperText}
        </span>
      )}
    </div>
  );
};
