import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { MenuItem } from '../menu/Menu';
import { Icon, IconName } from '../icon/Icon';
import { Typography } from '../typography/Typography';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  parameters: {
    backgrounds: {
      default: 'light'
    },
    layout: 'padded'
  },
  render: () => {
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

    const Settings = () => {
      return (
        <MenuItem>
          <Icon iconName={IconName.SIGN_OUT} />
          <Typography sx={{ marginLeft: '10px', textAlign: 'center' }}>
            Sign Out
          </Typography>
        </MenuItem>
      );
    };

    return (
      <Navbar
        handleSignIn={() => null}
        isAuthenticated={true}
        logo={<Icon iconName={IconName.PLANE} size='2x' />}
        pages={pages}
        settings={<Settings />}
        userPhoto=''
      />
    );
  }
};
