import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    slideHeight: 1,
    slideWidth: 1,
    slides: [
      {
        slide: <div style={{ backgroundColor: 'red', height: '200px' }} />
      },
      {
        slide: <div style={{ backgroundColor: 'blue', height: '200px' }} />
      },
      {
        slide: <div style={{ backgroundColor: 'green', height: '200px' }} />
      }
    ],
    totalSlides: 3,
    visibleSlides: 1
  }
};
