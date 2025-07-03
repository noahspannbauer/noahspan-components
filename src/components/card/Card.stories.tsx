import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button';
import { Card, CardBody, CardFooter, CardHeader } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: function Render() {
    return (
      <Card className='max-w-[400px]'>
        <CardHeader className='flex gap-3'>This is the card header</CardHeader>
        <CardBody>This is the card body</CardBody>
        <CardFooter>
          <Button>Click Me</Button>
          <Button>Click Me</Button>
        </CardFooter>
      </Card>
    );
  }
};
