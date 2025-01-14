import React from 'react';

interface SectionProps extends React.ComponentProps<'section'> {
  className?: string;
  children?: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={className} {...props}>
        {children}
      </section>
    );
  }
);

export default Section;
