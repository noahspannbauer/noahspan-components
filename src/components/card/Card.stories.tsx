import { Meta, StoryObj } from '@storybook/react';
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
      <Card>
        <CardHeader>Card header</CardHeader>
        <CardBody>Card body</CardBody>
        <CardFooter>Card footer</CardFooter>
      </Card>
    );
  }
};
