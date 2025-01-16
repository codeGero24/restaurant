import React from 'react';
import useCounterUp from '@hooks/useCounterUp';
import { useInView } from 'react-intersection-observer';

interface CardHighlightProps {
  title: string;
  subtitle: string;
  rate?: string | number;
  duration?: number;
}

const CardHighlight = React.memo(
  ({ title, subtitle, rate = 10, duration = 2 }: CardHighlightProps) => {
    const { ref, inView } = useInView({
      threshold: 0,
      triggerOnce: true,
    });

    const { counter } = useCounterUp({ inView, duration, rate });

    return (
      <div
        ref={ref}
        className='mb-2 flex items-center gap-6 border-l-[6px] border-primary px-6 font-nunito'
      >
        <span className='min-w-[60px] text-[48px] font-bold text-primary'>{counter}</span>
        <div>
          <p className='font-heebo text-base'>{subtitle}</p>
          <p className='text-lg font-bold uppercase text-gray-900'>{title}</p>
        </div>
      </div>
    );
  }
);

export default CardHighlight;
