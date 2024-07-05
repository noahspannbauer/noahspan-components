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
      updateArgs({ open: !open });
    };

    return (
      <>
        <Button onClick={onOpenCloseDrawer}>Open Drawer</Button>
        <Drawer onClose={onOpenCloseDrawer} {...args}>
          <DrawerHeader text='Drawer Header' />
          <DrawerBody>Drawer Body content goes here</DrawerBody>
          <DrawerFooter>
            <div className='mb-6 flex items-center justify-end gap-4 mt-auto'>
              <Button variant='outlined' onClick={onOpenCloseDrawer}>
                Cancel
              </Button>
              <Button variant='filled' onClick={onOpenCloseDrawer}>
                Save
              </Button>
            </div>
          </DrawerFooter>
        </Drawer>
      </>
    );
  }
};
