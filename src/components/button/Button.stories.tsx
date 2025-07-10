import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon, IconName } from '../icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  // args: {
  //   children: 'Save',
  //   startIcon: <Icon iconName={IconName.SAVE} />,
  //   variant: 'contained'
  // }
};

// export const Secondary: Story = {
//   args: {
//     children: 'Cancel',
//     startIcon: <Icon iconName={IconName.CIRCLE_XMARK} />,
//     variant: 'outlined'
//   }
// };
