import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import './Carousel.css';

export interface CarouselProps {
  slideHeight: number;
  slideWidth: number;
  slides: { slide: React.ReactNode }[];
  totalSlides: number;
  visibleSlides?: number;
}

export const Carousel = ({
  slideHeight,
  slideWidth,
  slides,
  totalSlides,
  visibleSlides
}: CarouselProps) => {
  return (
    <CarouselProvider
      visibleSlides={visibleSlides ? visibleSlides : 1}
      naturalSlideWidth={slideHeight}
      naturalSlideHeight={slideWidth}
      totalSlides={totalSlides}
    >
      <Slider>
        {slides.map((slide, index) => {
          return <Slide index={index}>{slide.slide}</Slide>;
        })}
      </Slider>
      <DotGroup />
    </CarouselProvider>
  );
};
