import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeroHeaderProps {
  title?: string;
  name?: string;
}

const HeroHeaderOther = React.memo(({ title, name }: HeroHeaderProps) => {
  return (
    <div className="hero-header lg:flex-50% mx-auto max-w-screen-xl flex-col px-5 py-20 lg:flex-row">
      <div className="hero-header__header text-center lg:text-left">
        <h1 className="h1-xl animate-slide-in-down mb-4 font-bold text-white">{title}</h1>
        <ul className="flex justify-center gap-2 text-lg text-white">
          <li className="cursor-pointer uppercase">
            <NavLink to="/" className="text-primary">
              Home
            </NavLink>
          </li>
          <li className="font-semibold text-gray-500">/</li>
          <li className="cursor-pointer uppercase text-primary">Pages</li>
          <li className="font-semibold text-gray-500">/</li>
          <li className="cursor-pointer uppercase">{name}</li>
        </ul>
      </div>
    </div>
  );
});

export default HeroHeaderOther;
