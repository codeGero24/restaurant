import React from 'react';
import { clsx } from 'clsx';
import CardTestimonial from '@components/ui/Card/Testimonial';
import Carousel from '@components/ui/Carousel';
import Section from '@components/layout/Section';

// - Types
import type { animation, Testimonial } from '@types.app/index';
// - Mock
import { TESTIMONIAL } from '@mock/index';
import AnimationWrapper from '@components/layout/AnimationWrapper';

interface TestimonialProps {
  animation?: animation;
  className?: string;
  testmonial?: Testimonial[];
}

const Testimonial: React.FC<TestimonialProps> = React.memo(
  ({ className, animation = 'animate-slide-in-up', testmonial }) => {
    const testimonials = testmonial || TESTIMONIAL;

    const classNameCustom = React.useMemo(() => {
      const defaultSpacing = 'px-4 pb-5 md:pb-12 lg:pb-20';
      return clsx('grid select-none grid-cols-1 items-center', defaultSpacing, className);
    }, [className]);

    return (
      <AnimationWrapper as='section' className={classNameCustom} animation={animation}>
        <Section.Header title='Teastimonial' subtitle='Our Clients Say!!!' />
        <Section.Content className=''>
          <Carousel data={testimonials} Slide={CardTestimonial} autoPlayInterval={5000} />
        </Section.Content>
      </AnimationWrapper>
    );
  }
);

export default Testimonial;
