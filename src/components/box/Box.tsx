import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type BoxBaseProps = MuiBoxProps;

export interface BoxProps extends BoxBaseProps {}

export const Box = ({ ...rest }: BoxProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiBox {...rest} />
    </ThemeProvider>
  );
};
