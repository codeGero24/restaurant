import React from 'react';
import { clsx } from 'clsx';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import './Card.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className, title, subtitle, children, ...props }: CardProps) => {
  return (
    <div
      className={clsx(
        'bck-card',
        'grid cursor-pointer grid-cols-1 gap-2 rounded-md bg-white p-4 shadow-sm',
        'md:p-6',
        className,
      )}
      {...props}
    >
      {children}
      {title && <CardTitle title={title} />}
      {subtitle && <CardSubtitle subtitle={subtitle} />}
    </div>
  );
};

Card.displayName = 'Card';

export default {
  Root: Card,
  Header: CardHeader,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Content: CardContent,
  Footer: CardFooter,
};
