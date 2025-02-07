import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icons',
  component: Icon
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Calendar: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-calendar'
  }
};

export const ChevronDown: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-chevron-down'
  }
};

export const ChevronLeft: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-chevron-left'
  }
};

export const ChevronRight: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-chevron-right'
  }
};

export const ChevronUp: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-chevron-up'
  }
};

export const CircleCheck: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-circle-check'
  }
};

export const CircleInfo: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-circle-info'
  }
};

export const CircleXMark: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-circle-xmark'
  }
};

export const Edit: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-edit'
  }
};

export const EllipsisVertical: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-ellipsis-vertical'
  }
};

export const Eye: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-eye'
  }
};

export const Gear: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-gear'
  }
};

export const Pen: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-pen'
  }
};

export const Plane: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-plane'
  }
};

export const Plus: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-plus'
  }
};

export const PuzzlePiece: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-puzzle-piece'
  }
};

export const Save: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-save'
  }
};

export const SignOut: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-sign-out'
  }
};

export const Trash: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-trash'
  }
};

export const TrianngleExclamation: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-triangle-exclamation'
  }
};

export const UserTie: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-user-tie'
  }
};

export const XMark: Story = {
  args: {
    size: '2xl',
    iconName: 'fa-xmark'
  }
};
