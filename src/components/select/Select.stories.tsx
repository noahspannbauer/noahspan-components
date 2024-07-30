import type { Meta, StoryObj } from '@storybook/react';
import { Select, Option } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Select...'
  },
  render: function Render(args) {
    return (
      <Select {...args}>
        <Option>Apples</Option>
        <Option>Bananas</Option>
        <Option>Cranberries</Option>
        <Option>Dragonfruit</Option>
      </Select>
    );
  }
};

export const Standard: Story = {
  args: {
    label: 'Select...',
    variant: 'standard'
  },
  render: function Render(args) {
    return (
      <Select {...args}>
        <Option>Apples</Option>
        <Option>Bananas</Option>
        <Option>Cranberries</Option>
        <Option>Dragonfruit</Option>
      </Select>
    );
  }
};

export const Static: Story = {
  args: {
    variant: 'static'
  },
  render: function Render(args) {
    return (
      <Select {...args}>
        <Option>Apples</Option>
        <Option>Bananas</Option>
        <Option>Cranberries</Option>
        <Option>Dragonfruit</Option>
      </Select>
    );
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
    return (
      <Select {...args}>
        <Option>Apples</Option>
        <Option>Bananas</Option>
        <Option>Cranberries</Option>
        <Option>Dragonfruit</Option>
      </Select>
    );
  }
};

export const NoLabel: Story = {
  args: {
    variant: 'outlined'
  },
  render: function Render(args) {
    return (
      <Select {...args}>
        <Option>Apples</Option>
        <Option>Bananas</Option>
        <Option>Cranberries</Option>
        <Option>Dragonfruit</Option>
      </Select>
    );
  }
};

export const NoLabelError: Story = {
  args: {
    error: true,
    helperText: 'Invalid Selection',
    variant: 'outlined'
  },
  render: function Render(args) {
    return (
      <Select {...args}>
        <Option>Apples</Option>
        <Option>Bananas</Option>
        <Option>Cranberries</Option>
        <Option>Dragonfruit</Option>
      </Select>
    );
  }
};
