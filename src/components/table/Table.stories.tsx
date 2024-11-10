import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, TableColumnDef } from './Table';
import { Box } from '../box/Box';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table',
  component: DataTable
} satisfies Meta<typeof DataTable>;

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
    id: 'people',
    header: () => <Box sx={{ textAlign: 'center' }}>People</Box>,
    columns: [
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
        cell: ({ getValue }) => (
          <Box sx={{ textAlign: 'right' }}>{getValue<number>()}</Box>
        )
      },
      {
        accessorKey: 'visits',
        header: 'Visits',
        cell: ({ getValue }) => (
          <Box sx={{ textAlign: 'right' }}>{getValue<number>()}</Box>
        )
      },
      {
        accessorKey: 'status',
        header: 'Status'
      },
      {
        accessorKey: 'progress',
        header: 'Progress',
        cell: ({ getValue }) => (
          <Box sx={{ textAlign: 'right' }}>{getValue<number>()}</Box>
        )
      }
    ]
  }
];

export const Basic: Story = {
  args: {
    defaultData: data,
    columns: columns
  }
};
