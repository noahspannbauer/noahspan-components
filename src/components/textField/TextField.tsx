import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type TextFieldBaseProps = MuiTextFieldProps;

export type TextFieldProps = TextFieldBaseProps;

export const TextField = ({ ...rest }: TextFieldProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTextField {...rest} />
    </ThemeProvider>
  );
};
