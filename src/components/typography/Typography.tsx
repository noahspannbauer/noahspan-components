import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type TypographyBaseProps = MuiTypographyProps;

export interface TypographyProps extends TypographyBaseProps {}

export const Typography = ({ ...rest }: TypographyProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTypography {...rest} />
    </ThemeProvider>
  );
};
