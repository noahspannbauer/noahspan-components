import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type PaperBaseProps = MuiPaperProps;

export interface PaperProps extends PaperBaseProps {}

export const Paper = ({ ...rest }: PaperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPaper {...rest} />
    </ThemeProvider>
  );
};
