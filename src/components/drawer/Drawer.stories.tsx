import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@nextui-org/react';
import { Drawer } from './Drawer';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    headerText: 'Header',
    size: '3xl'
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    const onOpenCloseDrawer = () => {
      updateArgs({ isOpen: !isOpen });
    };

    return (
      <>
        <Button color='primary' onClick={onOpenCloseDrawer}>
          Open Drawer
        </Button>
        <Drawer onClose={onOpenCloseDrawer} {...args}>
          <p>Drawer content goes here.</p>
        </Drawer>
      </>
    );
  }
};
