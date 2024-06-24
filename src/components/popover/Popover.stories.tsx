import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverHandler } from './Popover';
import { Button } from '../button/Button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: function Render() {
    const [openPopover, setOpenPopover] = useState<boolean>(false);

    const handleOpenPopover = () => {
      setOpenPopover(!openPopover);
    };

    return (
      <Popover>
        <PopoverHandler>
          <Button onClick={handleOpenPopover}>Open Popover</Button>
        </PopoverHandler>
        <PopoverContent>Popover content goes here</PopoverContent>
      </Popover>
    );
  }
};
