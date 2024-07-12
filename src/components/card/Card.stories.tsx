import { Meta, StoryObj } from '@storybook/react';
import { Card, CardBody, CardFooter } from './Card';
import { Typography } from '../typography/Typography';
import { Button } from '../button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: function Render() {
    return (
      <Card>
        <CardBody>
          <Typography variant='h5' className='mb-2'>
            Heading
          </Typography>
          <Typography>Card content goes here</Typography>
        </CardBody>
        <CardFooter>
          <Button variant='filled'>Click Me</Button>
        </CardFooter>
      </Card>
    );
  }
};
