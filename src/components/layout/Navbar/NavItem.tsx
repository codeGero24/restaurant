import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps extends React.ComponentProps<"button"> {
  name: string;
  path: string;
  className: string;
  group?: string;
}

const NavItem = React.memo(({ name, path, className }: NavItemProps) => {
  return (
    <NavLink to={path} className={className}>
      {name}
    </NavLink>
  );
});

export default NavItem;
