import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem, ListItemPrefix } from './List';
import { Card } from '../card/Card';
import { PlaneIcon } from '../icons/plane/PlaneIcon';
import { PuzzlePieceIcon } from '../icons/puzzlePiece/PuzzlePieceIcon';
import { Typography } from '../typography/Typography';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: function Render() {
    return (
      <Card>
        <List>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
          <ListItem>Three</ListItem>
        </List>
      </Card>
    );
  }
};

export const Prefix: Story = {
  render: function Render() {
    return (
      <Card>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PlaneIcon />
            </ListItemPrefix>
            <div>
              <Typography variant='h6'>Flying</Typography>
              <Typography variant='body1'>flying.noahspannbauer.com</Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PuzzlePieceIcon />
            </ListItemPrefix>
            <div>
              <Typography variant='h6'>Components</Typography>
              <Typography variant='body1'>
                components.noahspannbauer.com
              </Typography>
            </div>
          </ListItem>
        </List>
      </Card>
    );
  }
};
