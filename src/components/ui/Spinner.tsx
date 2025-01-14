import React from 'react';
import { clsx } from 'clsx';
import Icon from './Icon';

interface SpinnerProps {
  size?: string;
  color?: string;
  className?: string;
}

export default function Spinner({
  size = 'h-16 w-16',
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
      role="status"
      className={clsx(
        'z-50 flex h-screen w-screen items-center justify-center bg-white',
        className,
        loading ? 'block' : 'hidden'
      )}
    >
      <Icon
        name="LoaderCircle"
        className={clsx('lucide lucide-loader-circle animate-spin', size, color)}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}