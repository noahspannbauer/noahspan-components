import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuHandler, MenuItem, MenuList } from './Menu';
import { Button } from '../button/Button';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: 'bottom'
  },
  parameters: {
    layout: 'padded'
  },
  render: function Render(args) {
    return (
      <Menu {...args}>
        <MenuHandler>
          <Button>Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </MenuList>
      </Menu>
    );
  }
};
