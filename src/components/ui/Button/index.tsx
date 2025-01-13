import React from 'react';
import SrollUp from '@components/ui/Button/SrollUp';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'sroll-up';
  className?: string;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { variant, className, children, ...primitive } = props;

  if (variant === 'sroll-up') {
    return <SrollUp />;
  }

  return (
    <>
      <button className={className} {...primitive}>
        {children}
      </button>
    </>
  );
}
