import React from 'react';
import { clsx } from 'clsx';
import CardTestimonial from '@components/ui/Card/Testimonial';
import Carousel from '@components/ui/Carousel';
import AnimationWrapper from '@components/layout/AnimationWrapper';
import Section from '@components/layout/Section';

import useReviewsStore from '@stores/reviews.store';

// - Types
import type { animation, Testimonial } from '@types.app/index';

interface TestimonialProps {
  animation?: animation;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = React.memo(
  ({ className, animation = 'animate-slide-in-up' }) => {
    const { reviews } = useReviewsStore();

    const classNameCustom = React.useMemo(() => {
      const defaultSpacing = 'px-4 pb-5 md:pb-12 lg:pb-20';
      return clsx('grid select-none grid-cols-1 items-center', defaultSpacing, className);
    }, [className]);

    return (
      <AnimationWrapper as='section' className={classNameCustom} animation={animation}>
        <Section.Header title='Testimonial' subtitle='Our Clients Say!!!' />
        <Section.Content>
          {reviews.length > 0 && (
            <Carousel data={[...reviews]} Slide={CardTestimonial} autoPlayInterval={5000} />
          )}
        </Section.Content>
      </AnimationWrapper>
    );
  }
);

export default Testimonial;
