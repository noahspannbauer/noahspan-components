import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slotProps: {
      textField: {
        size: 'small'
      }
    },
    value: '10/24/2024'
  },
  render: (args: any) => {
    const [{ value }, updateArgs] = useArgs();

    const onChange = (value: string) => {
      updateArgs({ value: value });
    };

    return <DatePicker onChange={onChange} value={value} {...args} />;
  }
};
