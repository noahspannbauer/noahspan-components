// import {
//   Navbar as MaterialTailwindNavbar,
//   NavbarProps as MaterialTailwindNavbarProps
// } from '@material-tailwind/react';
// import { Typography } from '../typography/Typography';
// import { ThemeProvider } from '../../theme/ThemeProvider';

// export interface NavbarBrandProps {
//   children?: React.ReactNode;
// }

// export const NavbarBrand = ({ children }: NavbarBaseProps) => {
//   return <div className='flex items-center gap-2'>{children}</div>;
// };

// export interface NavbarItemProps {
//   name: string;
//   url: string;
// }

// export const NavbarItem = ({ name, url }: NavbarItemProps) => {
//   return (
//     <>
//       <Typography
//         as='li'
//         variant='small'
//         className='flex items-center gap-x-2 p-1 font-medium'
//       >
//         <a href={url} className='flex items-center'>
//           {name}
//         </a>
//       </Typography>
//     </>
//   );
// };

// export interface NavbarLinksProps {
//   items: NavbarItemProps[];
//   isMobile?: boolean;
// }

// export const NavbarLinks = ({ items, isMobile }: NavbarLinksProps) => {
//   const NavbarList = () => {
//     return (
//       <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
//         {items.map((item) => {
//           return <NavbarItem name={item.name} url={item.url} />;
//         })}
//       </ul>
//     );
//   };

//   return (
//     <>
//       {isMobile && <NavbarList />}
//       {!isMobile && (
//         <div className='hidden lg:block'>
//           <NavbarList />
//         </div>
//       )}
//     </>
//   );
// };

// export interface NavbarMenuProps {
//   children: React.ReactNode;
// }

// export const NavbarMenu = ({ children }: NavbarMenuProps) => {
//   return <>{children}</>;
// };

// type NavbarBaseProps = Pick<
//   MaterialTailwindNavbarProps,
//   | 'variant'
//   | 'color'
//   | 'shadow'
//   | 'blurred'
//   | 'fullWidth'
//   | 'className'
//   | 'children'
// >;

// export interface NavbarProps extends NavbarBaseProps {
//   children: React.ReactNode;
//   size?: string;
// }

// const theme = {
//   navbar: {
//     styles: {
//       base: {
//         navbar: {
//           initial: {
//             maxWidth: ''
//           }
//         }
//       }
//     }
//   }
// };

// export const Navbar = ({ children, size, ...rest }: NavbarProps) => {
//   return (
//     <ThemeProvider value={theme}>
//       <MaterialTailwindNavbar
//         className={`px-4 py-2 lg:px-8 lg:py-4 ${size ? `w-[${size}]` : ''}`}
//         {...rest}
//       >
//         <div className='container mx-auto flex items-center justify-between text-[#212121]'>
//           {children}
//         </div>
//       </MaterialTailwindNavbar>
//     </ThemeProvider>
//   );
// };

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const pages = ['Page 1', 'Page 2', 'Page 3'];
const settings = ['Setting 1', 'Setting 2', 'Setting 3'];

export const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color='secondary' position='static' sx={{ width: '1000px' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <img height={40} width={40} src='noahspan-logo.png' />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <DeleteIcon />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                // anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={false}
                // onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
