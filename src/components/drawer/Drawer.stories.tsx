import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Drawer } from './Drawer';
import { Button } from '../button/Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    anchor: 'right',
    PaperProps: {
      sx: {
        width: '1000px'
      }
    },
    onTransitionEnter: fn()
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    const onOpenCloseDrawer = () => {
      updateArgs({ open: !open });
    };

    return (
      <>
        <Button variant='contained' onClick={onOpenCloseDrawer}>
          Open Drawer
        </Button>
        <Drawer onClose={onOpenCloseDrawer} {...args}>
          <Button onClick={onOpenCloseDrawer} variant='contained'>
            Close Drawer
          </Button>
        </Drawer>
      </>
    );
  }
};
