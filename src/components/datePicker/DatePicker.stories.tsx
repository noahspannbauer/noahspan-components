import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  render: function Render() {
    const [date, setDate] = useState<string>();

    const handleDateChanged = (date: string) => {
      setDate(date);
    };

    return (
      <DatePicker
        handleDateChanged={handleDateChanged}
        inputProps={{
          value: date?.toString()
        }}
      />
    );
  }
};
