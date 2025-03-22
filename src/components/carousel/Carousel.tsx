import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import './Carousel.css';

export interface Slide {
  slide: React.ReactNode;
}

export interface CarouselProps {
  slideHeight: number;
  slideWidth: number;
  slides: Slide[];
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
        {slides.map((slide: Slide, index: number) => {
          return <Slide index={index}>{slide.slide}</Slide>;
        })}
      </Slider>
      <DotGroup />
    </CarouselProvider>
  );
};
