import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from './Dialog';
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
        <Button onClick={handleOpen} variant='contained'>
          Open Dialog
        </Button>
        <Dialog onClose={handleOpen} open={open}>
          <DialogTitle>This is the dialog header</DialogTitle>
          <DialogContent>
            <DialogContentText>This is the dialog body.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOpen} variant='outlined'>
              Cancel
            </Button>
            <Button onClick={handleOpen} variant='contained'>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
};
