import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { className, children, ...primitive } = props;
  
  return (
    <>
      <button className={className} {...primitive}>{children}</button>
    </>
  );
};
