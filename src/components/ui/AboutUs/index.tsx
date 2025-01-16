import React from 'react';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import Image from '@components/ui/Image';
import Icon from '@components/ui/Icon';
import CardHighlight from '@components/ui/Card/Highlight';
import Section from '@components/layout/Section';
import AnimationWrapper from '@components/layout/AnimationWrapper';

// - Types
import type { AboutUs } from '@types.app/index'; // - Mock
import { ABOUT_DATA } from '@mock/index';

interface AboutUsProps {
  aboutData?: AboutUs;
}

const AboutUs: React.FC<AboutUsProps> = React.memo(({ aboutData }) => {
  const aboutUs = aboutData || ABOUT_DATA;

  return (
    <Section.Root classNameContent='grid grid-cols-1 px-4 items-center gap-12 lg:grid-cols-2'>
      {/* ABOUT US - IMAGES */}
      <Section.Content className='grid grid-cols-2 gap-4'>
        {aboutUs.images.map((image, index) => {
          const img160 = [1, 2].includes(index);
          const classImage = img160 ? 'w-[70%]' : 'w-full';
          return (
            <AnimationWrapper
              key={`food-${index}`}
              animation='animate-zoom-in'
              delay={true}
              className={clsx(
                index === 1 && 'self-end',
                index === 2 && 'justify-items-end'
              )}
            >
              <Image className={classImage} {...image} />
            </AnimationWrapper>
          );
        })}
      </Section.Content>

      {/* ABOUT US - INFO */}
      <Section.Content>
        <Section.Header className='mb-6 grid grid-cols-1 gap-2' animation='animate-none'>
          <p className='section-title left-none font-pacifico text-2xl text-primary'>
            About Us
          </p>
          <h1>
            Welcome to
            <Icon
              className='icon mx-2 inline-block text-primary'
              strokeWidth={'2.5px'}
              name='Utensils'
            />
            Restoran
          </h1>
        </Section.Header>

        <Section.Content className='grid grid-cols-1 gap-6 text-lg'>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
            diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
            diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
            justo magna dolore erat amet
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <CardHighlight {...aboutUs.experience} />
            <CardHighlight {...aboutUs.popularMembers} />
          </div>

          <NavLink
            to='/about'
            className={clsx(
              'button',
              'w-1/2 px-4 py-3 uppercase lg:w-1/3 lg:py-5 lg:text-lg'
            )}
          >
            Read More
          </NavLink>
        </Section.Content>
      </Section.Content>
    </Section.Root>
  );
});

export default AboutUs;
