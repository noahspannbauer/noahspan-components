import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    children: 'This is an info alert',
    color: 'default'
  }
};

export const Warning: Story = {
  args: {
    children: 'This is a warning alert',
    color: 'warning'
  }
};

export const Error: Story = {
  args: {
    children: 'This is an error alert',
    color: 'danger'
  }
};

export const Success: Story = {
  args: {
    children: 'This is a success alert',
    color: 'success'
  }
};
