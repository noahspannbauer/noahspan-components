import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3'
  }
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4'
  }
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5'
  }
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6'
  }
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle 1'
  }
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle 2'
  }
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1'
  }
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body 2'
  }
};
