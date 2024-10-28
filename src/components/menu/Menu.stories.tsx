import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Menu, MenuItem } from './Menu';
import { Button } from '../button/Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    onTransitionEnter: fn()
  },
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [{ open }, updateArgs] = useArgs();

    const handleClick = () => {
      updateArgs({ open: !open });
    };

    const onOpenCloseMenu = () => {
      updateArgs({ open: !open });
    };

    return (
      <>
        <Button label='Open Menu' onClick={handleClick} variant='contained' />
        <Menu open={open}>
          <MenuItem onClick={onOpenCloseMenu}>Item 1</MenuItem>
          <MenuItem onClick={onOpenCloseMenu}>Item 2</MenuItem>
          <MenuItem onClick={onOpenCloseMenu}>Item 3</MenuItem>
        </Menu>
      </>
    );
  }
};
