import React from 'react';
import SkeletonCard from '@components/ui/Skeleton/Card';
import SkeletonInput from '@components/ui/Skeleton/Input';
import SkeletonTextArea from '@components/ui/Skeleton/TextArea';

export interface SkeletonProps {
  name: 'card' | 'input' | 'textarea';
}

const Skeleton = React.memo<SkeletonProps>(({ name }) => {
  const SkeletonComponent = React.useMemo(() => {
    switch (name) {
      case 'card':
        return SkeletonCard;
      case 'input':
        return SkeletonInput;
      case 'textarea':
        return SkeletonTextArea;
      default:
        return;
    }
  }, [name]);

  return <>{SkeletonComponent && <SkeletonComponent />}</>;
});
export default Skeleton;
