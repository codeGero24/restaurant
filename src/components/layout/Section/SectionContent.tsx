import React from 'react';

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContent = React.memo(({ className, children }: SectionContentProps) => {
  return <div className={className}>{children}</div>;
});

export default SectionContent;
