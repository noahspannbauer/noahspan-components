import { AppBar, Box, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

export interface NavbarLeftProps {
  children: React.ReactNode;
}

export const NavbarLeft = ({ children }: NavbarLeftProps) => {
  return <>{children}</>;
};

export interface NavbarLinksProps {
  children: React.ReactNode;
}

export const NavbarLinks = ({ children }: NavbarLinksProps) => {
  return <>{children}</>;
};

export interface NavbarRightProps {
  children: React.ReactNode;
}

export const NavbarRight = ({ children }: NavbarRightProps) => {
  return <>{children}</>;
};

export interface NavbarProps {
  navbarLeft: React.ReactNode;
  navbarLinks: React.ReactNode;
  navbarRight: React.ReactNode;
}

export const Navbar = ({
  navbarLeft,
  navbarLinks,
  navbarRight
}: NavbarProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color='secondary' position='static'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavbarLeft>{navbarLeft}</NavbarLeft>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavbarLinks>{navbarLinks}</NavbarLinks>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <NavbarRight>{navbarRight}</NavbarRight>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
