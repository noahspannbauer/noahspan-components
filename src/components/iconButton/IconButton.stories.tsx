import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    );
  }
};
