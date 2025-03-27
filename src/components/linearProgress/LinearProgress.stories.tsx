import { Meta, StoryObj } from '@storybook/react';
import { LinearProgress } from './LinearProgress';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/LinearProgress',
  component: LinearProgress
} satisfies Meta<typeof LinearProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Indeterminate: Story = {
  parameters: {
    layout: 'padded'
  }
};

export const Determinate: Story = {
  args: {
    value: 75
  },
  parameters: {
    layout: 'padded'
  },
  render: function Render(args) {
    return <LinearProgress variant='determinate' value={args.value} />;
  }
};
