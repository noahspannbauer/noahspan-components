import { useEffect, useState } from 'react';
import {
  MobileNav as MaterterialTailwindMobileNav,
  MobileNavProps as MaterialTailwindMobileNavProps,
  Navbar as MaterialTailwindNavbar,
  NavbarProps as MaterialTailwindNavbarProps
} from '@material-tailwind/react';
import { Button } from '../button/Button';
import { IconButton } from '../iconButton/IconButton';
import { Typography } from '../typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type MobileNavBaseProps = Pick<
  MaterialTailwindMobileNavProps,
  'open' | 'animate' | 'className' | 'children'
>;

export interface MobileNavProps extends MobileNavBaseProps {}

export const MobileNav = ({ ...rest }: MobileNavProps) => {
  return <MaterterialTailwindMobileNav {...rest} />;
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
  items: NavbarItemProps[];
  size?: string;
}

export const Navbar = ({ items, size, ...rest }: NavbarProps) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // return () => {
    //     window.removeEventListener('resize', handleResize);
    // }
  }, []);

  return (
    <>
      <MaterialTailwindNavbar
        className={`mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 ${size ? `w-[${size}]` : ''}`}
        {...rest}
      >
        <div className='container mx-auto flex items-center justify-between text-[#212121]'>
          <img height={45} width={45} src='noahspan-logo.png' />
          <div className='hidden lg:block'>
            <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
              {items.map((item) => {
                return <NavbarItem name={item.name} url={item.url} />;
              })}
            </ul>
          </div>
          <div className='flex items-center gap-x-1'>
            <Button variant='text' size='sm' className='hidden lg:inline-block'>
              <span>Sign In</span>
            </Button>
          </div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <FontAwesomeIcon icon={faBars} size='2x' />
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className='container mx-auto'>
            {items.map((item) => {
              return <NavbarItem name={item.name} url={item.url} />;
            })}
            <div className='flex items-center gap-x-1'>
              <Button fullWidth variant='text' size='sm' className=''>
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </MaterialTailwindNavbar>
    </>
  );
};
