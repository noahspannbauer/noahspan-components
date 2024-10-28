import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const fruits: { label: string; value: string }[] = [
  {
    label: 'Apples',
    value: 'Apples'
  },
  {
    label: 'Blueberries',
    value: 'Blueberries'
  },
  {
    label: 'Cranberries',
    value: 'Cranberries'
  },
  {
    label: 'Dragonfruit',
    value: 'Dragonfruit'
  }
];

export const Default: Story = {
  args: {
    options: fruits,
    value: ''
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const onChange = (event: any) => {
      updateArgs({ value: event.target.value });
    };

    return <Select options={args.options} onChange={onChange} value={value} />;
  }
};
