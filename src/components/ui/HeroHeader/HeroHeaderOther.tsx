import AnimationWrapper from '@components/layout/AnimationWrapper';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeroHeaderProps {
  title?: string;
  name?: string;
}

const HeroHeaderOther = React.memo(({ title, name }: HeroHeaderProps) => {
  return (
    <div className="hero-header lg:flex-50% mx-auto max-w-screen-xl flex-col px-5 py-20 lg:flex-row">
      <div className="text-center lg:text-left">
        <AnimationWrapper
          as="h1"
          animation="animate-slide-in-down"
          className="h1-xl mb-4 font-bold text-white"
        >
          {title}
        </AnimationWrapper>
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
