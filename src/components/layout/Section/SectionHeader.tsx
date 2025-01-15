import React from 'react';
import AnimationWrapper from '../AnimationWrapper';

interface SectionHeaderProps {
  title?: string;
  subTitle?: string;
}

const SectionHeader = React.memo(({ title, subTitle }: SectionHeaderProps) => {
  if (!title && !subTitle) return <></>;

  return (
    <AnimationWrapper
      animation="animate-slide-in-up"
      duration="duration-[500ms]"
      className="pb-12 text-center"
    >
      <p className="section-title font-pacifico text-xl text-primary">{title}</p>
      <h1>{subTitle}</h1>
    </AnimationWrapper>
  );
});

export default SectionHeader;
