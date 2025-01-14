import React from 'react';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import Image from '@components/ui/Image';
import headerImg from '@assets/header-img.png';

const HeroHeaderHome = React.memo(() => {
  return (
    <div className="hero-header min-h-[500px] flex-col px-5 py-20 lg:flex-row">
      <div className="text-center lg:w-[45%] lg:text-left">
        <h1 className="h1-xl mb-4 animate-slide-in-left font-bold text-white">
          Enjoy Our
          <br />
          Delicious Meal
        </h1>
        <p className="mb-8 animate-slide-in-left text-lg text-white md:text-xl">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
          diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
          justo magna dolore erat amet
        </p>

        <NavLink
          to="/"
          className={clsx(
            'button',
            'w-1/2 animate-slide-in-left px-4 py-2 uppercase lg:w-1/3 lg:py-5 lg:text-lg'
          )}
        >
          Book A Table
        </NavLink>
      </div>
      <div className="w-4/5 lg:w-[45%]">
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
