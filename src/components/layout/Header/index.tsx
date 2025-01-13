import React from 'react';
import { clsx } from 'clsx';
import Logo from '@components/ui/Logo';
import Navbar from '@components/layout/Navbar';
import HeroHeader from '@components/ui/HeroHeader';
import useScroll from '@hooks/useScroll';
import './Header.scss';

const Header: React.FC = React.memo(() => {
  const { isScrolled } = useScroll({ threshold: 50 });

  return (
    <>
      <header id="l-header" className="relative lg:mx-auto lg:max-w-screen-xl">
        <div
          className={clsx(
            'z-10 flex w-full flex-wrap items-center justify-between bg-dark px-5 py-3 transition-all duration-500',
            isScrolled
              ? 'fixed left-0 top-0 lg:shadow-lg'
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
