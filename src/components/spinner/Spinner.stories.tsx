import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Loading...'
  }
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Loading...'
  }
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Loading...'
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Loading...'
  }
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Loading...'
  }
};
