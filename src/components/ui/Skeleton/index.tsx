import React from 'react';
import SkeletonCard from '@components/ui/Skeleton/Card';

export interface SkeletonProps {
  name: 'card';
}

const Skeleton = React.memo<SkeletonProps>(({ name }) => {
  const SkeletonComponent = React.useMemo(() => {
    switch (name) {
      case 'card':
        return SkeletonCard;
      default:
        return;
    }
  }, [name]);

  return <>{SkeletonComponent && <SkeletonComponent />}</>;
});
export default Skeleton;
