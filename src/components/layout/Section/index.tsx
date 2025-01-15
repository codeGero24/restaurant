import React from 'react';
import { clsx } from 'clsx';
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';

interface SectionProps {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  className?: string;
  classNameContent?: string;
}

export default function Section({
  title,
  subTitle,
  children,
  className,
  classNameContent,
}: SectionProps) {
  return (
    <section className={clsx('px-5 py-5 md:py-12 lg:gap-12 lg:py-20', className)}>
      <SectionHeader title={title} subTitle={subTitle} />
      <SectionContent
        className={clsx(
          'grid grid-cols-1 gap-4',
          'md:grid-cols-2 md:gap-8',
          'lg:grid-cols-4',
          classNameContent,
        )}
      >
        {children}
      </SectionContent>
    </section>
  );
}
