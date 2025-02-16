import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Icon, IconName } from '../icon/Icon';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <IconButton>
        <Icon iconName={IconName.PLUS} />
      </IconButton>
    );
  }
};
