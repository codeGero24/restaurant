import React from 'react';
import Card, { getStyle } from '@components/ui/Card';
import SolidIcon from '@components/ui/Icon/Solid';
import Image from '@components/ui/Image';

// - Types
import { Testimonial } from '@types.app/data';

interface CardTestimonialProps {
  data: Testimonial;
  isActive: boolean;
  className?: string;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

const CardTestimonial = React.memo(
  ({ data, isActive, ref, className = '' }: CardTestimonialProps) => {
    const { review, name, profession, img } = data;
    const classActive = isActive ? 'is--active' : '';
    return (
      <Card.Root
        ref={ref}
        className={getStyle('wrapper', [
          'hover-none border border-geyser',
          'min-w-[300px] lg:min-w-[420px]',
          className,
          classActive,
        ])}
      >
        <SolidIcon className='icon' name='Quote' />

        <p>{review}</p>
        <div className='flex gap-4'>
          <Image
            {...img}
            style={{ borderRadius: '50%', aspectRatio: '1/1' }}
            className='w-[54px]'
          />
          <div>
            <h5>{name}</h5>
            <p>{profession}</p>
          </div>
        </div>
      </Card.Root>
    );
  }
);

export default CardTestimonial;
