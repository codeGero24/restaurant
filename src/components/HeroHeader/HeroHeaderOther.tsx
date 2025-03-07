import { delay } from '@utils/generic.fc';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeroHeaderProps {
  title?: string;
  name?: string;
}

const HeroHeaderOther = React.memo(({ title, name }: HeroHeaderProps) => {
  const titleRef = React.useRef(null);

  React.useEffect(() => {
    if (titleRef.current) {
      const titleElement = titleRef.current as HTMLElement;
      titleElement.classList?.add('animate-slide-in-down');
      delay(500, () => titleElement.classList?.remove('animate-slide-in-down'));
    }
  }, [title]);

  return (
    <div className='hero-header mx-auto min-h-[400px] max-w-screen-xl flex-col px-5 py-20 lg:flex-row'>
      <div className='text-center lg:text-left'>
        <h1 className='h1-xl mb-4 font-bold text-white' ref={titleRef}>
          {title}
        </h1>
        <ul className='flex justify-center gap-2 text-lg text-white'>
          <li className='cursor-pointer uppercase'>
            <NavLink to='/' className='text-primary'>
              Home
            </NavLink>
          </li>
          <li className='font-semibold text-gray-500'>/</li>
          <li className='cursor-pointer uppercase text-primary'>Pages</li>
          <li className='font-semibold text-gray-500'>/</li>
          <li className='cursor-pointer uppercase'>{name}</li>
        </ul>
      </div>
    </div>
  );
});

export default HeroHeaderOther;
