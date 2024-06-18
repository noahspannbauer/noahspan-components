import {
  Typography as MatieralTailwindTypography,
  TypographyProps as MaterialTailwindTypographyProps
} from '@material-tailwind/react';

type TypographyBaseProps = Pick<
  MaterialTailwindTypographyProps,
  | 'variant'
  | 'color'
  | 'textGradient'
  | 'as'
  | 'className'
  | 'children'
  | 'href'
>;

export interface TypographyProps extends TypographyBaseProps {}

export const Typography = ({ ...rest }: TypographyProps) => {
  return <MatieralTailwindTypography {...rest} />;
};
