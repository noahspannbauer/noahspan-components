import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../iconButton/IconButton';
import { Table, TableColumnDef } from './Table';
import { EllipsisVerticalIcon } from '../icons/ellipsesVertical/EllipsisVertical';
import { Menu, MenuHandler, MenuItem, MenuList } from '../menu/Menu';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const data: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  }
];

const columns: TableColumnDef[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: ({ getValue }) => (
      <div>
        {getValue<string>().charAt(0).toUpperCase() +
          getValue<string>().slice(1)}
      </div>
    )
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: ({ getValue }) => (
      <div>
        {getValue<string>().charAt(0).toUpperCase() +
          getValue<string>().slice(1)}
      </div>
    )
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cellProps: {
      className: 'text-right'
    }
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cellProps: {
      className: 'text-right'
    }
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cellProps: {
      className: 'text-right'
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    cellProps: {
      className: 'text-center'
    },
    cell: () => {
      return (
        <Menu placement='bottom'>
          <MenuHandler>
            <div>
              <IconButton variant='text'>
                <EllipsisVerticalIcon size='lg' />
              </IconButton>
            </div>
          </MenuHandler>
          <MenuList>
            <MenuItem>Edit</MenuItem>
            <MenuItem>View</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      );
    },
    enableSorting: false
  }
];

export const Basic: Story = {
  args: {
    defaultData: data,
    columns: columns,
    rowProps: {
      className: 'hover:bg-blue-gray-50'
    }
  }
};
