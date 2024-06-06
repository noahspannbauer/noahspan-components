import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@nextui-org/react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter
} from './Drawer';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hideCloseButton: true,
    isOpen: false
  },
  render: function Render(args) {
    const [{ hideCloseButton, isOpen }, updateArgs] = useArgs();
    const onOpenCloseDrawer = () => {
      updateArgs({ isOpen: !isOpen });
    };

    return (
      <>
        <Button color='primary' onClick={onOpenCloseDrawer}>
          Open Drawer
        </Button>
        <Drawer isOpen={isOpen} hideCloseButton={hideCloseButton} {...args}>
          <DrawerContent>
            <DrawerHeader>
              <h2>Drawer Title</h2>
            </DrawerHeader>
            <DrawerBody>Drawer content goes here</DrawerBody>
            <DrawerFooter>
              <div className='flex gap-4 justify-end justify-self-center'>
                <div>
                  <Button color='default' onClick={onOpenCloseDrawer}>
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button color='primary' onClick={onOpenCloseDrawer}>
                    Save
                  </Button>
                </div>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
};
