import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid, GridColDef, GridColumnGroupingModel } from './DataGrid';

const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid
} satisfies Meta<typeof DataGrid>;

export default meta;

type Story = StoryObj<typeof DataGrid>;

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const data: Person[] = [
  {
    id: '0',
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    id: '1',
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    id: '2',
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  }
];

const columns: GridColDef[] = [
  {
    field: 'firstName',
    headerName: 'First Name',
    headerAlign: 'center'
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    headerAlign: 'center'
  },
  {
    field: 'age',
    headerName: 'Age',
    headerAlign: 'center',
    align: 'right'
  },
  {
    field: 'visits',
    headerName: 'Visits',
    headerAlign: 'center',
    align: 'right'
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center'
  },
  {
    field: 'progress',
    headerName: 'Progress',
    headerAlign: 'center',
    align: 'right'
  }
];

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'People',
    headerAlign: 'center',
    children: [
      {
        field: 'firstName'
      },
      {
        field: 'lastName'
      },
      {
        field: 'age'
      },
      {
        field: 'visits'
      },
      {
        field: 'status'
      },
      {
        field: 'progress'
      }
    ]
  }
];

export const Default: Story = {
  args: {
    columns: columns,
    columnGroupingModel: columnGroupingModel,
    pageSizeOptions: [10, 25, 50, { value: -1, label: 'All' }],
    rows: data
  }
};
