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

export const Filled: Story = {
  render: function Render() {
    return (
      <IconButton>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    );
  }
};

export const Gradient: Story = {
  args: {
    variant: 'gradient'
  },
  render: function Render(args) {
    return (
      <IconButton {...args}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    );
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  },
  render: function Render(args) {
    return (
      <IconButton {...args}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    );
  }
};

export const Text: Story = {
  args: {
    variant: 'text'
  },
  render: function Render(args) {
    return (
      <IconButton {...args}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    );
  }
};
