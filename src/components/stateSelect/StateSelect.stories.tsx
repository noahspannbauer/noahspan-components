import type { Meta, StoryObj } from '@storybook/react';
import { StateSelect } from './StateSelect';

const meta: Meta<typeof StateSelect> = {
  title: 'Components/StateSelect ',
  component: StateSelect
} satisfies Meta<typeof StateSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <StateSelect />;
  }
};
