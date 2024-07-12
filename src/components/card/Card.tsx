import {
  Card as MaterialTailwindCard,
  CardProps as MaterialTailwindCardProps,
  CardBody as MaterialTailwindCardBody,
  CardBodyProps as MaterialTailwindCardBodyProps,
  CardFooter as MaterialTailwindCardFooter,
  CardFooterProps as MaterialTailwindCardFooterProps,
  CardHeader as MaterialTailwindCardHeader,
  CardHeaderProps as MaterialTailwindCardHeaderProps
} from '@material-tailwind/react';

type CardBodyBaseProps = Pick<
  MaterialTailwindCardBodyProps,
  'className' | 'children'
>;

export interface CardBodyProps extends CardBodyBaseProps {}

export const CardBody = ({ ...rest }: CardBodyProps) => {
  return <MaterialTailwindCardBody {...rest} />;
};

type CardFooterBaseProps = Pick<
  MaterialTailwindCardFooterProps,
  'divider' | 'className' | 'children'
>;

export interface CardFooterProps extends CardFooterBaseProps {}

export const CardFooter = ({ ...rest }: CardFooterProps) => {
  return <MaterialTailwindCardFooter {...rest} />;
};

type CardHeaderBaseProps = Pick<
  MaterialTailwindCardHeaderProps,
  'variant' | 'color' | 'shadow' | 'floated' | 'className' | 'children'
>;

export interface CardHeaderProps extends CardHeaderBaseProps {}

export const CardHeader = ({ ...rest }: CardHeaderProps) => {
  return <MaterialTailwindCardHeader {...rest} />;
};

type CardBaseProps = Pick<
  MaterialTailwindCardProps,
  'variant' | 'color' | 'shadow' | 'className' | 'children'
>;

export interface CardProps extends CardBaseProps {}

export const Card = ({ ...rest }: CardProps) => {
  return <MaterialTailwindCard {...rest} />;
};
