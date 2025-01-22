import React from 'react';
import { clsx } from 'clsx';
import Icon from '@components/ui/Icon';

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function Spinner({
  size = 64,
  color = 'text-primary',
  className = '',
}: SpinnerProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const html = document.querySelector('html');
    html?.classList.add('overflow-hidden');

    const handlePageLoad = () => {
      html?.classList.remove('overflow-hidden');
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <div
      role='status'
      className={clsx(
        'z-50 flex h-screen animate-fede-in items-center justify-center bg-white',
        className,
        loading ? 'block' : 'hidden'
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
