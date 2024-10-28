import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { SaveIcon } from '../icons/save/SaveIcon';
import { CircleXmarkIcon } from '../icons/circleXmark/CircleXmark';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Save',
    startIcon: <SaveIcon />,
    variant: 'contained'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    startIcon: <CircleXmarkIcon />,
    variant: 'outlined'
  }
};
