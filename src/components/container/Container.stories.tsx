import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box/Box';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: function Render() {
    return (
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '1000px' }} />
      </Container>
    );
  }
};
