import React from 'react';
import { clsx } from 'clsx';
import Icon from '@components/ui/Icon';
import Image from '@components/ui/Image';
import Section from '@components/layout/Section';
import AnimationWrapper from '@components/layout/AnimationWrapper';

// - Types
import type { animation } from '@types.app/index';
import FormReservation from '../Form/Reservation';
// - Mock

interface ReservationProps {
  animation?: animation;
  className?: string;
}

const Reservation: React.FC<ReservationProps> = React.memo(
  ({ className, animation = 'animate-slide-in-up' }) => {
    const classNameCustom = React.useMemo(() => {
      return clsx(
        'grid grid-cols-1 items-center py-20 lg:grid-cols-2',
        className
      );
    }, [className]);

    return (
      <AnimationWrapper as='section' className={classNameCustom} animation={animation}>
        <Section.Content className='relative'>
          <Image
            alt='video'
            src='/img/video.jpg'
            className='lg:h-[540px]'
            style={{ height: '100%' }}
          />
          <div className='animate-pulse-border absolute left-[50%] top-[50%] h-[100px] w-[100px] rounded-full border border-primary bg-primary'></div>

          <div className='absolute left-[50%] top-[50%] z-10 flex h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border border-primary bg-primary'>
            <Icon size={42} className='text-black' name='Play' strokeWidth={'3px'} />
          </div>
        </Section.Content>
        <Section.Content className='bg-dark p-12 lg:h-[540px]'>
          <Section.Header
            className='mb-6 grid grid-cols-1 gap-2'
            animation='animate-none'
          >
            <p className='section-title left-none font-pacifico text-2xl text-primary'>
              Reservetion
            </p>
            <h1 className='text-white'>Book A Table Online</h1>
          </Section.Header>

          <FormReservation />
        </Section.Content>
      </AnimationWrapper>
    );
  }
);

export default Reservation;
