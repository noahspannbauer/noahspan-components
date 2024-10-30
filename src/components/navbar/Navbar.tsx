import { useState } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';
import { IconButton } from '../iconButton/IconButton';
import { Menu } from '../menu/Menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

export interface NavbarProps {
  handlePageClick?: () => void;
  handleSignIn: () => void;
  isAuthenticated: boolean;
  logo: React.ReactNode;
  pages?: { name: string; url: string }[];
  settings?: React.ReactNode;
  userPhoto?: string;
}

export const Navbar = ({
  handlePageClick,
  handleSignIn,
  isAuthenticated,
  logo,
  pages,
  settings,
  userPhoto
}: NavbarProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const onOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const onCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar color='secondary' position='static'>
        <Toolbar>
          <Box sx={{ flexGrow: 0, marginRight: '10px' }}>
            <img height={40} width={40} src='noahspan-logo.png' />
          </Box>
          <Box sx={{ flexGrow: 1, color: '#000000', marginRight: '-75px' }}>
            {logo}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages &&
              pages.map((page) => (
                <Button
                  key={page.name}
                  label={page.name}
                  onClick={handlePageClick}
                  sx={{ my: 2, color: '#212121', display: 'block' }}
                />
              ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <>
              {isAuthenticated && (
                <>
                  <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={userPhoto}
                      imgProps={{ height: 40, width: 40 }}
                    />
                  </IconButton>
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={onCloseUserMenu}
                  >
                    {settings}
                  </Menu>
                </>
              )}
              {!isAuthenticated && (
                <Button label='Sign In' onClick={handleSignIn} />
              )}
            </>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
