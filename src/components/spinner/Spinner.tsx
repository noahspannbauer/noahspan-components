import {
  Spinner as MaterialTailewindSprinner,
  SpinnerProps as MaterialTailwindSpinnerProps
} from '@material-tailwind/react';

type SpinnerBaseProps = Pick<
  MaterialTailwindSpinnerProps,
  'color' | 'children'
>;

export interface SpinnerProps extends SpinnerBaseProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Spinner = ({ size, children, ...rest }: SpinnerProps) => {
  let style;

  switch (size) {
    case 'xs': {
      style = 'h-4 w-4';

      break;
    }
    case 'sm': {
      style = 'h-6 w-6';

      break;
    }
    case 'md': {
      style = 'h-8 w-8';

      break;
    }
    case 'lg': {
      style = 'h-10 w-10';

      break;
    }
    case 'xl': {
      style = 'h-12 w-12';
    }
  }

  return (
    <MaterialTailewindSprinner className={style} {...rest}>
      {children}
    </MaterialTailewindSprinner>
  );
};
