import type { Meta, StoryObj } from '@storybook/react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from './Dropdown';
import { Button } from '../button/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: function Render() {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button>Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key='new'>New file</DropdownItem>
          <DropdownItem key='copy'>Copy link</DropdownItem>
          <DropdownItem key='edit'>Edit file</DropdownItem>
          <DropdownItem key='delete' className='text-danger' color='danger'>
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};
