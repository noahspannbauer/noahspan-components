// import {
//   Card as MuiCard,
//   CardProps as MuiCardProps,
//   CardActions as MuiCardActions,
//   CardActionsProps as MuiCardActionsProps,
//   CardContent as MuiCardContent,
//   CardContentProps as MuiCardContentProps,
//   CardHeader as MuiCardHeader,
//   CardHeaderProps as MuiCardHeaderProps
// } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';

// type CardActionsBaseProps = MuiCardActionsProps;

// export interface CardActionsProps extends CardActionsBaseProps {}

// export const CardActions = ({ ...rest }: CardActionsProps) => {
//   return <MuiCardActions {...rest} />;
// };

// type CardContentBaseProps = MuiCardContentProps;

// export interface CardContentProps extends CardContentBaseProps {}

// export const CardContent = ({ ...rest }: CardContentProps) => {
//   return <MuiCardContent {...rest} />;
// };

// type CardHeaderBaseProps = MuiCardHeaderProps;

// export interface CardHeaderProps extends CardHeaderBaseProps {}

// export const CardHeader = ({ ...rest }: CardHeaderProps) => {
//   return <MuiCardHeader {...rest} />;
// };

// type CardBaseProps = MuiCardProps;

// export interface CardProps extends CardBaseProps {}

// export const Card = ({ ...rest }: CardProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiCard {...rest} />
//     </ThemeProvider>
//   );
// };

import {
  Card as HeroUICard,
  CardProps as HeroUICardProps,
  CardBody as HeroUICardBody,
  CardFooter as HeroUICardFooter,
  CardFooterProps as HeroUICardFooterProps,
  CardHeader as HeroUICardHeader
} from '@heroui/react';

export const CardBody = ({ ...rest }) => {
  return <HeroUICardBody {...rest} />;
};

type CardFooterBaseProps = HeroUICardFooterProps;

export interface CardFooterProps extends CardFooterBaseProps {}

export const CardFooter = ({ ...rest }: CardFooterProps) => {
  return <HeroUICardFooter {...rest} />;
};

export const CardHeader = ({ ...rest }) => {
  return <HeroUICardHeader {...rest} />;
};

type CardBaseProps = HeroUICardProps;

export interface CardProps extends CardBaseProps {}

export const Card = ({ ...rest }: CardProps) => {
  return <HeroUICard {...rest} />;
};
