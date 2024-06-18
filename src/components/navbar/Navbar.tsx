import {
  Navbar as MaterialTailwindNavbar,
  NavbarProps as MaterialTailwindNavbarProps
} from '@material-tailwind/react';
import { Typography } from '../typography/Typography';

export interface NavbarBrandProps {
  children?: React.ReactNode;
}

export const NavbarBrand = ({ children }: NavbarBaseProps) => {
  return <div className='flex items-center gap-2'>{children}</div>;
};

export interface NavbarItemProps {
  name: string;
  url: string;
}

export const NavbarItem = ({ name, url }: NavbarItemProps) => {
  return (
    <>
      <Typography
        as='li'
        variant='small'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <a href={url} className='flex items-center'>
          {name}
        </a>
      </Typography>
    </>
  );
};

export interface NavbarLinksProps {
  items: NavbarItemProps[];
  isMobile?: boolean;
}

export const NavbarLinks = ({ items, isMobile }: NavbarLinksProps) => {
  const NavbarList = () => {
    return (
      <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
        {items.map((item) => {
          return <NavbarItem name={item.name} url={item.url} />;
        })}
      </ul>
    );
  };

  return (
    <>
      {isMobile && <NavbarList />}
      {!isMobile && (
        <div className='hidden lg:block'>
          <NavbarList />
        </div>
      )}
    </>
  );
};

export interface NavbarMenuProps {
  children: React.ReactNode;
}

export const NavbarMenu = ({ children }: NavbarMenuProps) => {
  return <>{children}</>;
};

type NavbarBaseProps = Pick<
  MaterialTailwindNavbarProps,
  | 'variant'
  | 'color'
  | 'shadow'
  | 'blurred'
  | 'fullWidth'
  | 'className'
  | 'children'
>;

export interface NavbarProps extends NavbarBaseProps {
  children: React.ReactNode;
  size?: string;
}

export const Navbar = ({ children, size, ...rest }: NavbarProps) => {
  return (
    <>
      <MaterialTailwindNavbar
        className={`mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 ${size ? `w-[${size}]` : ''}`}
        {...rest}
      >
        <div className='container mx-auto flex items-center justify-between text-[#212121]'>
          {children}
        </div>
      </MaterialTailwindNavbar>
    </>
  );
};
