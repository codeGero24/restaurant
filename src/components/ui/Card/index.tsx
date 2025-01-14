import React from 'react';
interface CardProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, className, children }, ref) => {
    return (
      <div ref={ref} className={className}>
        {children}
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    );
  }
);

export default Card;
