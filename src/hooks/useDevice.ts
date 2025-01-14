import React from 'react';

export default function useDevice(threshold = 1024) {
  const [device, setDevice] = React.useState<string>('');

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < threshold) {
        // - Tablet use mobile layout
        setDevice('mobile');
      } else {
        setDevice('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold]);

  return { device, isDesktop: device === 'desktop', isMobile: device === 'mobile' };
}
