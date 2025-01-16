import React from 'react';
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';

// - Types
import { animation, duration } from '@types.app/animation';

interface AnimationWrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  animation?: animation;
  duration?: duration;
  delay?: boolean;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimationWrapper = ({
  children,
  className,
  as: TagHtml = 'div',
  animation = 'animate-fede-in-slow',
  delay = false,
  duration = 'duration-[1000ms]',
  threshold = 0.1,
  triggerOnce = true,
}: AnimationWrapperProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationClass = React.useMemo(() => {
    return clsx(inView && animation, duration, delay && 'custom-delay');
  }, [animation, duration, delay, inView]);

  return (
    <TagHtml
      ref={ref as React.Ref<HTMLElement>}
      className={clsx(animationClass, className)}
    >
      {children}
    </TagHtml>
  );
};
export default AnimationWrapper;
