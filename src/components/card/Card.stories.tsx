import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button';
import { Card, CardActions, CardContent } from './Card';
import { Icon } from '../icon/Icon';
import { Typography } from '../typography/Typography';
import { CardHeader } from '@mui/material';

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
        <CardHeader
          action={<Icon iconName='fa-ellipsis-vertical' />}
          avatar={<Icon iconName='fa-heart' />}
          subheader='Sub Heading'
          title='Heading'
        />
        <CardContent>
          <Typography>Card content goes here</Typography>
        </CardContent>
        <CardActions>
          <Button>Click Me</Button>
          <Button>Click Me</Button>
        </CardActions>
      </Card>
    );
  }
};
