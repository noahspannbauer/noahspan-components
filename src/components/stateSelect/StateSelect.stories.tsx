import type { Meta, StoryObj } from '@storybook/react';
import { StateSelect } from './StateSelect';

const meta: Meta<typeof StateSelect> = {
  title: 'Components/StateSelect ',
  component: StateSelect
} satisfies Meta<typeof StateSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Select...'
  },
  render: function Render(args) {
    return <StateSelect {...args} />;
  }
};

export const Standard: Story = {
  args: {
    label: 'Select...',
    variant: 'standard'
  },
  render: function Render(args) {
    return <StateSelect {...args} />;
  }
};

export const Static: Story = {
  args: {
    variant: 'static'
  },
  render: function Render(args) {
    return <StateSelect {...args} />;
  }
};

export const Error: Story = {
  args: {
    error: true,
    helperText: 'Invalid Selection',
    label: 'Error',
    variant: 'outlined'
  },
  render: function Render(args) {
    return <StateSelect {...args} />;
  }
};

export const NoLabel: Story = {
  args: {
    variant: 'outlined'
  },
  render: function Render(args) {
    return <StateSelect {...args} />;
  }
};

export const NoLabelError: Story = {
  args: {
    error: true,
    helperText: 'Invalid Selection',
    variant: 'outlined'
  },
  render: function Render(args) {
    return <StateSelect {...args} />;
  }
};
