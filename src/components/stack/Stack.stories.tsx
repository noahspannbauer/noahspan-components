import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
// import { Card, CardContent } from '../card/Card';
// import { Typography } from '../typography/Typography';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <>
        {/* <Stack spacing={5}>
          {[...Array(3)].map((_element, index) => {
            return (
              <Card>
                <CardContent>
                  <Typography variant='body1'>{`Item ${index}`}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack> */}
      </>
    );
  }
};
