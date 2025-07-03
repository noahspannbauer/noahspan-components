import {
  Card as HeroUICard,
  CardProps as HeroUICardProps,
  CardBody as HeroUICardBody,
  CardFooter as HeroUICardFooter,
  CardFooterProps as HeroUICardFooterProps,
  CardHeader as HeroUICardHeader,
  HeroUIProvider
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
  return (
    <HeroUIProvider>
      <HeroUICard {...rest} />
    </HeroUIProvider>
  );
};
