import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';
import { IconButton } from '../iconButton/IconButton';
import { Menu, MenuItem } from '../menu/Menu';
import { Typography } from '../typography/Typography';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  parameters: {
    backgrouns: {
      default: 'light'
    },
    layout: 'padded'
  },
  render: () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const pages = [
      {
        name: 'Page 1',
        url: '#'
      },
      {
        name: 'Page 2',
        url: '#'
      },
      {
        name: 'Page 3',
        url: '#'
      }
    ];
    const settings = ['Setting 1', 'Setting 2', 'Setting 3'];

    const onOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const onCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const Left = () => {
      return (
        <>
          <img height={40} width={40} src='noahspan-logo.png' />
        </>
      );
    };

    const Links = () => {
      return (
        <>
          {pages.map((page) => (
            <Button
              key={page.name}
              label={page.name}
              // onClick={}
              sx={{ my: 2, color: '#212121', display: 'block' }}
            />
          ))}
        </>
      );
    };

    const Right = () => {
      return (
        <>
          <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
            <Avatar src='/avatar.png' imgProps={{ height: 40, width: 40 }} />
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
                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      );
    };

    return (
      <Navbar
        navbarLeft={<Left />}
        navbarLinks={<Links />}
        navbarRight={<Right />}
      />
    );
  }
};
