import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const fruits: { key: string; label: string }[] = [
  {
    key: 'Apples',
    label: 'Apples'
  },
  {
    key: 'Blueberries',
    label: 'Blueberries'
  },
  {
    key: 'Cranberries',
    label: 'Cranberries'
  },
  {
    key: 'Dragonfruit',
    label: 'Dragonfruit'
  }
];

export const Default: Story = {
  args: {
    options: fruits,
    placeholder: 'Select a fruit',
    value: ''
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const onChange = (event: any) => {
      updateArgs({ value: event.target.value });
    };

    return <Select onChange={onChange} value={value} {...args} />;
  }
};
