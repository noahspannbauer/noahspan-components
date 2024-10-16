// import {
//   Button as MaterialTailwindButton,
//   ButtonProps as MaterialTailwindButtonProps
// } from '@material-tailwind/react';

// type ButtonBaseProps = Pick<
//   MaterialTailwindButtonProps,
//   | 'variant'
//   | 'size'
//   | 'color'
//   | 'fullWidth'
//   | 'ripple'
//   | 'className'
//   | 'children'
//   | 'loading'
//   | 'onClick'
//   | 'type'
//   | 'disabled'
// >;

// export interface ButtonProps extends ButtonBaseProps {}

// export const Button = ({ ...rest }: ButtonProps) => {
//   return <MaterialTailwindButton {...rest} />;
// };

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends ButtonBaseProps {
  label?: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton {...rest}>{label}</MuiButton>
    </ThemeProvider>
  );
};
