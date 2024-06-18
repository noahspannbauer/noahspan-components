import {
  MobileNav as MaterialTailwindMobileNav,
  MobileNavProps as MaterialTailwindMobileNavProps
} from '@material-tailwind/react';

type MobileNavBaseProps = Pick<
  MaterialTailwindMobileNavProps,
  'open' | 'animate' | 'className' | 'children'
>;

export interface MobileNavProps extends MobileNavBaseProps {}

export const MobileNav = ({ ...rest }: MobileNavProps) => {
  return <MaterialTailwindMobileNav {...rest} />;
};
