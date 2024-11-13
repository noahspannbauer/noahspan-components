import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDef, Table } from './Table';

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

const people: Person[] = [
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

const columns: ColumnDef<Person>[] = [
  {
    header: 'People',
    meta: {
      align: 'center'
    },
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name'
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name'
      },
      {
        accessorKey: 'age',
        header: 'Age',
        meta: {
          align: 'right'
        }
      },
      {
        accessorKey: 'visits',
        header: 'Visits',
        meta: {
          align: 'right'
        }
      },
      {
        accessorKey: 'status',
        header: 'Status'
      },
      {
        accessorKey: 'progress',
        header: 'Progress',
        meta: {
          align: 'right'
        }
      }
    ]
  }
];

export const Basic: Story = {
  args: {
    columns: columns,
    data: people
  }
};
