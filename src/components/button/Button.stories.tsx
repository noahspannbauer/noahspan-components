import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {},
  render: function Render(args) {
    return <Button {...args}>Filled</Button>;
  }
};

export const Gradient: Story = {
  args: {
    variant: 'gradient'
  },
  render: function Render(args) {
    return <Button {...args}>Gradient</Button>;
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  },
  render: function Render(args) {
    return <Button {...args}>Outlined</Button>;
  }
};

export const Text: Story = {
  args: {
    variant: 'text'
  },
  render: function Render(args) {
    return <Button {...args}>Text</Button>;
  }
};
