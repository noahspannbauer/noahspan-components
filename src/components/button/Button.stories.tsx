import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon, IconName } from '../icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Save',
    color: 'primary',
    startContent: <Icon iconName={IconName.SAVE} />
  }
};

export const Secondary: Story = {
  args: {
    children: 'Cancel',
    color: 'secondary',
    startContent: <Icon iconName={IconName.CIRCLE_XMARK} />
  }
};
