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
