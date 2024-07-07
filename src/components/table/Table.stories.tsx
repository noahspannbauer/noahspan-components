import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button';
import { Table, TableColumnDef } from './Table';

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
    id: 'actions',
    header: 'Actions',
    cell: (props) => {
      const showAlert = () => {
        const person: Person = props.row.original as Person;

        alert(`${
          person.lastName.charAt(0).toUpperCase() + person.lastName.slice(1)
        }, ${
          person.firstName.charAt(0).toUpperCase() + person.lastName.slice(1)
        }\n
          Age: ${person.age}\n
          Visits: ${person.visits}\n
          Status: ${person.status}\n
          Progress: ${person.progress}
        `);
      };

      return (
        <Button variant='filled' onClick={showAlert}>
          Details
        </Button>
      );
    },
    enableSorting: false
  },
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
  }
];

export const Basic: Story = {
  args: {
    defaultData: data,
    columns: columns
  }
};
