import { useState } from 'react';
import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';
import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';
import { IconButton } from '../iconButton/IconButton';
import { ListItemText, Menu, MenuItem } from '../menu/Menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Icon, IconName } from '../icon/Icon';

export interface NavbarProps {
  handlePageClick?: (url: string) => void;
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
  const [anchorElPages, setAnchorElPages] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));

  const onOpenPagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPages(event.currentTarget);
  };

  const onClosePagesMenu = () => {
    setAnchorElPages(null);
  };

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
          {!isMedium && (
            <>
              <Box sx={{ flexGrow: 0, color: '#000000', marginRight: '10px' }}>
                <IconButton
                  onClick={onOpenPagesMenu}
                  sx={{ color: '#000000', p: 0 }}
                >
                  <Icon iconName={IconName.BARS} size='lg' />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElPages}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElPages)}
                  onClose={onClosePagesMenu}
                >
                  {pages &&
                    pages.map((page) => (
                      <MenuItem onClick={() => handlePageClick!(page.url)}>
                        <ListItemText>{page.name}</ListItemText>
                      </MenuItem>
                    ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  color: '#000000',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <img
                  height={35}
                  width={35}
                  src='noahspan-logo.png'
                  style={{ marginRight: '5px' }}
                />
                {logo}
              </Box>
            </>
          )}
          {isMedium && (
            <>
              <Box sx={{ flexGrow: 0, marginRight: '10px' }}>
                <img height={40} width={40} src='noahspan-logo.png' />
              </Box>
              <Box sx={{ flexGrow: 1, color: '#000000', marginRight: '-75px' }}>
                {logo}
              </Box>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {pages &&
                  pages.map((page) => (
                    <Button
                      key={page.name}
                      onClick={() => handlePageClick!(page.url)}
                      sx={{ my: 2, color: '#212121', display: 'block' }}
                    >
                      {page.name}
                    </Button>
                  ))}
              </Box>
            </>
          )}
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
                <Button onClick={handleSignIn}>Sign In</Button>
              )}
            </>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
