import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from './Table';

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

export const Basic: Story = {
  render: () => {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={6}>
                People
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>First Name</TableCell>
              <TableCell align='center'>Last Name</TableCell>
              <TableCell align='center'>Age</TableCell>
              <TableCell align='center'>Visits</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person: Person) => {
              return (
                <TableRow>
                  <TableCell>{person.firstName}</TableCell>
                  <TableCell>{person.lastName}</TableCell>
                  <TableCell align='right'>{person.age}</TableCell>
                  <TableCell align='right'>{person.visits}</TableCell>
                  <TableCell>{person.status}</TableCell>
                  <TableCell align='right'>{person.progress}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};
