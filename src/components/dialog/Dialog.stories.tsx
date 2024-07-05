import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from './Dialog';
import { Button } from '../button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  render: function Render() {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
      <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>This is the dialog header</DialogHeader>
          <DialogBody>This is the dialog body.</DialogBody>
          <DialogFooter>
            <Button className='mr-1' onClick={handleOpen} variant='outlined'>
              Cancel
            </Button>
            <Button onClick={handleOpen}>OK</Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }
};
