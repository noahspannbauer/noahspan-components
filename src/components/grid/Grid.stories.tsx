import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Paper } from '../paper/Paper';
import { Box } from '@mui/material';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'light'
    },
    layout: 'padded'
  },
  render: () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Paper>Size 8</Paper>
          </Grid>
          <Grid size={4}>
            <Paper>Size 4</Paper>
          </Grid>
          <Grid size={6}>
            <Paper>Size 6</Paper>
          </Grid>
          <Grid size={6}>
            <Paper>Size 6</Paper>
          </Grid>
          <Grid size={3}>
            <Paper>Size 3</Paper>
          </Grid>
          <Grid size={3}>
            <Paper>Size 3</Paper>
          </Grid>
          <Grid size={3}>
            <Paper>Size 3</Paper>
          </Grid>
          <Grid size={3}>
            <Paper>Size 3</Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
};
