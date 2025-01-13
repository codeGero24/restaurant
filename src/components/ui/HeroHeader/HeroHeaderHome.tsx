import React from 'react';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import Image from '@components/ui/Image';
import headerImg from '@assets/header-img.png';

const HeroHeaderHome = React.memo(() => {
  return (
    <div className="hero-header min-[500px] mx-auto max-w-screen-xl flex-col px-5 py-20 lg:flex-row">
      <div className="hero-header__header text-center lg:w-4/5 lg:text-left">
        <h1 className="h1-xl animate-slide-in-left mb-4 font-bold text-white">
          Enjoy Our
          <br />
          Delicious Meal
        </h1>
        <p className="animate-slide-in-left mb-8 text-lg text-white md:text-xl">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
          diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
          justo magna dolore erat amet
        </p>

        <NavLink
          to="/"
          className={clsx(
            'animate-slide-in-left mx-auto block w-1/2 rounded-sm bg-primary px-6 py-2 font-[500] uppercase lg:mx-0 lg:py-4',
            'hover:brightness-110'
          )}
        >
          Book A Table
        </NavLink>
      </div>
      <div className="hero-header__content lg:w-4/5">
        <Image
          src={headerImg}
          alt="grigliata"
          width={400}
          height={400}
          className="animate-spin-slow"
        />
      </div>
    </div>
  );
});

export default HeroHeaderHome;
