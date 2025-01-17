import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { clsx } from 'clsx';

interface CarouselProps<T> {
  data: T[];
  autoPlayInterval?: number; // second
  Slide: React.ComponentType<{ data: T; isActive: boolean }>;
}

const Carousel = <T,>({ data, Slide, autoPlayInterval = 0 }: CarouselProps<T>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Funzione per il cambio automatico delle slide
  React.useEffect(() => {
    if (!emblaApi || !autoPlayInterval) return;

    const autoPlay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(autoPlay);
  }, [emblaApi, autoPlayInterval]);

  return (
    <div>
      {/* Slides */}
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex min-w-full justify-center px-4 lg:min-w-[33%]'
            >
              <Slide data={item} isActive={index === selectedIndex} />
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className='mt-4 flex justify-center gap-2'>
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={clsx(
              'h-4 w-4 rounded-full border border-gray-300',
              index === selectedIndex ? 'bg-primary' : 'bg-white'
            )}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
