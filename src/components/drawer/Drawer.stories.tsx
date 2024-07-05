import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from './Drawer';
import { Button } from '../button/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    placement: 'right',
    size: 1000
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    const onOpenCloseDrawer = () => {
      console.log(open);
      updateArgs({ open: !open });
    };

    return (
      <>
        <Button onClick={onOpenCloseDrawer}>Open Drawer</Button>
        <Drawer
          onClose={onOpenCloseDrawer}
          // open={open}
          {...args}
        >
          <DrawerHeader text='Drawer Header' />
          <DrawerBody>Drawer Body content goes here</DrawerBody>
          <DrawerFooter>Drawer Footer content goes here</DrawerFooter>
        </Drawer>
      </>
    );
  }
};
