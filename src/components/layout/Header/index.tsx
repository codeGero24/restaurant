import React from 'react';
import { clsx } from 'clsx';
import Logo from '@components/ui/Logo';
import Navbar from '@components/layout/Navbar';
import HeroHeader from '@components/HeroHeader';
import useScroll from '@hooks/useScroll';

const Header: React.FC = React.memo(() => {
  const { isScrolled } = useScroll({ threshold: 50 });

  return (
    <>
      <header id='l-header' className='lg:relative'>
        <div
          className={clsx(
            'left-0 top-0 z-10 flex w-full flex-wrap items-center justify-between bg-dark px-5 py-3',
            isScrolled
              ? 'fixed animate-slide-in-down lg:shadow-lg'
              : 'lg:absolute lg:bg-transparent'
          )}
        >
          <Logo />
          <Navbar />
        </div>
        <HeroHeader />
      </header>
    </>
  );
});

export default Header;
