import React from 'react';
import SrollUp from '@components/ui/Button/SrollUp';
import BookTable from '@components/ui/Button/BookTable';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'sroll-up' | 'book-a-table';
  className?: string;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { variant, className, children, ...primitive } = props;

  switch (variant) {
    case 'sroll-up':
      return <SrollUp />;
    case 'book-a-table':
      return <BookTable />;
    default:
      return (
        <button className={className} {...primitive}>
          {children}
        </button>
      );
  }
}
