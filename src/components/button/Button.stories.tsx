import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import SaveIcon from '@mui/icons-material/Save';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Save',
    startIcon: <SaveIcon />,
    variant: 'contained'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    startIcon: <CancelOutlinedIcon />,
    variant: 'outlined'
  }
};

// export const Gradient: Story = {
//   args: {
//     variant: 'gradient'
//   },
//   render: function Render(args) {
//     return <Button {...args}>Gradient</Button>;
//   }
// };

// export const Outlined: Story = {
//   args: {
//     variant: 'outlined'
//   },
//   render: function Render(args) {
//     return <Button {...args}>Outlined</Button>;
//   }
// };

// export const Text: Story = {
//   args: {
//     variant: 'text'
//   },
//   render: function Render(args) {
//     return <Button {...args}>Text</Button>;
//   }
// };

// export const Disabled: Story = {
//   args: {
//     variant: 'outlined',
//     disabled: true
//   },
//   render: function Render(args) {
//     return <Button {...args}>Disabled</Button>;
//   }
// };
