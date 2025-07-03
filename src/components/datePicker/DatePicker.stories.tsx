import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { DatePicker, parseDate } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: parseDate('10/24/2024')
  },
  render: (args: any) => {
    const [{ value }, updateArgs] = useArgs();

    const onChange = (value: string) => {
      updateArgs({ value: value });
    };

    return <DatePicker onChange={onChange} value={value} {...args} />;
  }
};
