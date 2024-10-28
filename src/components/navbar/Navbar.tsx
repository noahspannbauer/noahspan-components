import { useState } from 'react';
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
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Avatar } from '../avatar/Avatar';

const pages = ['Page 1', 'Page 2', 'Page 3'];
const settings = ['Setting 1', 'Setting 2', 'Setting 3'];

export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const onOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const onCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar color='secondary' position='static' sx={{ width: '1000px' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* <Grid container columns={12}>
              <Grid justifyContent='left' alignItems='center' columns={4}>
                <img height={40} width={40} src='noahspan-logo.png' />
              </Grid>
              <Grid display='flex' justifyContent='center' alignItems='center' columns={4}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#212121', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Grid>
              <Grid display='flex' justifyContent='right' alignItems='center' columns={4}>
                <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    src='/avatar.png'
                    imgProps={{
                      height: 40,
                      width: 40
                    }}
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
                  {settings.map((setting) => (
                    <MenuItem key={setting}>
                      <Typography sx={{ textAlign: 'center' }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid> */}
            <img height={40} width={40} src='noahspan-logo.png' />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#212121', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src='/avatar.png'
                  imgProps={{
                    height: 40,
                    width: 40
                  }}
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
