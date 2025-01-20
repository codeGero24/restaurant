import React from 'react';
import { clsx } from 'clsx';
import CardTestimonial from '@components/ui/Card/Testimonial';
import Carousel from '@components/ui/Carousel';
import Section from '@components/layout/Section';

// - Types
import type { animation, Testimonial } from '@types.app/index';
// - Mock
import AnimationWrapper from '@components/layout/AnimationWrapper';
import { useGetReviews } from '@queries/reviews';
import useReviewsStore from '@stores/reviews.store';

interface TestimonialProps {
  animation?: animation;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = React.memo(
  ({ className, animation = 'animate-slide-in-up' }) => {
    // - const testimonials = TESTIMONIAL;
    const { reviews, setReviews } = useReviewsStore();

    const { data, isLoading, error } = useGetReviews();

    const classNameCustom = React.useMemo(() => {
      const defaultSpacing = 'px-4 pb-5 md:pb-12 lg:pb-20';
      return clsx('grid select-none grid-cols-1 items-center', defaultSpacing, className);
    }, [className]);

    React.useEffect(() => {
      if (data) {
        setReviews(data);
      }
    }, [data, setReviews]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return null;

    return (
      <AnimationWrapper as='section' className={classNameCustom} animation={animation}>
        <Section.Header title='Testimonial' subtitle='Our Clients Say!!!' />
        <Section.Content className=''>
          <Carousel data={reviews} Slide={CardTestimonial} autoPlayInterval={5000} />
        </Section.Content>
      </AnimationWrapper>
    );
  }
);

export default Testimonial;
