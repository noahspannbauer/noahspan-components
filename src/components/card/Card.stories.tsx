import { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent } from './Card';
import { Typography } from '../typography/Typography';

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
        <CardContent>
          <Typography variant='h5' className='mb-2'>
            Heading
          </Typography>
          <Typography>Card content goes here</Typography>
        </CardContent>
      </Card>
    );
  }
};
