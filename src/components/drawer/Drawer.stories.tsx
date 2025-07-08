import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader
} from './Drawer';
import { Button } from '../button/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    const onOpenCloseDrawer = () => {
      updateArgs({ isOpen: !isOpen });
    };

    return (
      <>
        <Button onPress={onOpenCloseDrawer}>Open Drawer</Button>
        <Drawer isOpen={args.isOpen} onOpenChange={onOpenCloseDrawer}>
          <DrawerContent>
            {(onOpenCloseDrawer) => (
              <>
                <DrawerHeader className='flex flex-col gap-1'>
                  Drawer Title
                </DrawerHeader>
                <DrawerBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    color='danger'
                    variant='light'
                    onPress={onOpenCloseDrawer}
                  >
                    Close
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }
};
