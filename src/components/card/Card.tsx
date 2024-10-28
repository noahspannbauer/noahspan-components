import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type CardContentBaseProps = MuiCardContentProps;

export interface CardContentProps extends CardContentBaseProps {}

export const CardContent = ({ ...rest }: CardContentProps) => {
  return <MuiCardContent {...rest} />;
};

type CardBaseProps = MuiCardProps;

export interface CardProps extends CardBaseProps {}

export const Card = ({ ...rest }: CardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiCard {...rest} />
    </ThemeProvider>
  );
};
