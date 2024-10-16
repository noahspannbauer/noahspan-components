import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Select, SelectChangeEvent } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const fruits: { label: string; value: string }[] = [
  {
    label: 'Apples',
    value: 'Apples'
  },
  {
    label: 'Blueberries',
    value: 'Blueberries'
  },
  {
    label: 'Cranberries',
    value: 'Cranberries'
  },
  {
    label: 'Dragonfruit',
    value: 'Dragonfruit'
  }
];

export const Default: Story = {
  args: {
    options: fruits,
    value: ''
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const onChange = (event: SelectChangeEvent) => {
      updateArgs({ value: event.target.value });
    };

    return <Select options={args.options} onChange={onChange} value={value} />;
  }
};

// export const Standard: Story = {
//   args: {
//     label: 'Select...',
//     variant: 'standard'
//   },
//   render: function Render(args) {
//     return (
//       <Select {...args}>
//         <Option>Apples</Option>
//         <Option>Bananas</Option>
//         <Option>Cranberries</Option>
//         <Option>Dragonfruit</Option>
//       </Select>
//     );
//   }
// };

// export const Static: Story = {
//   args: {
//     variant: 'static'
//   },
//   render: function Render(args) {
//     return (
//       <Select {...args}>
//         <Option>Apples</Option>
//         <Option>Bananas</Option>
//         <Option>Cranberries</Option>
//         <Option>Dragonfruit</Option>
//       </Select>
//     );
//   }
// };

// export const Error: Story = {
//   args: {
//     error: true,
//     helperText: 'Invalid Selection',
//     label: 'Error',
//     variant: 'outlined'
//   },
//   render: function Render(args) {
//     return (
//       <Select {...args}>
//         <Option>Apples</Option>
//         <Option>Bananas</Option>
//         <Option>Cranberries</Option>
//         <Option>Dragonfruit</Option>
//       </Select>
//     );
//   }
// };

// export const NoLabel: Story = {
//   args: {
//     variant: 'outlined'
//   },
//   render: function Render(args) {
//     return (
//       <Select {...args}>
//         <Option>Apples</Option>
//         <Option>Bananas</Option>
//         <Option>Cranberries</Option>
//         <Option>Dragonfruit</Option>
//       </Select>
//     );
//   }
// };

// export const NoLabelError: Story = {
//   args: {
//     error: true,
//     helperText: 'Invalid Selection',
//     variant: 'outlined'
//   },
//   render: function Render(args) {
//     return (
//       <Select {...args}>
//         <Option>Apples</Option>
//         <Option>Bananas</Option>
//         <Option>Cranberries</Option>
//         <Option>Dragonfruit</Option>
//       </Select>
//     );
//   }
// };
