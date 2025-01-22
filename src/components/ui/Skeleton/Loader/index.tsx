import React from 'react';
import { clsx } from 'clsx';
import Icon from '@components/ui/Icon';

interface SkeletonLoaderProps {
  size?: number;
  color?: string;
  className?: string;
}

const SkeletonLoader = React.memo<SkeletonLoaderProps>(
  ({ size = 64, color = 'text-primary', className = '' }) => {
    return (
      <div
        role='status'
        className={clsx(
          'z-50 flex h-screen animate-fede-in items-center justify-center bg-white',
          className
        )}
      >
        <Icon
          name='LoaderCircle'
          size={size}
          className={clsx('lucide lucide-loader-circle animate-spin', color)}
        />
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }
);

export default SkeletonLoader;
