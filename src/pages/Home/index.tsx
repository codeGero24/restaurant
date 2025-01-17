import CardService from '@components/ui/Card/Service';
import AboutUs from '@components/ui/AboutUs';
import Tabs from '@components/ui/Tabs';
import Reservation from '@components/ui/Reservation';
import TeamMembers from '@components/ui/TeamMembers';
import Testimonial from '@components/ui/Testimonial';

import Section from '@components/layout/Section';
import AnimationWrapper from '@components/layout/AnimationWrapper';

// - Types
import { Service } from '@types.app/data';
// - Mock
import { SERVICES, tabsMenu } from '@mock/index';

export default function HomePage() {
  return (
    <>
      {/* SERVICES */}
      <Section.Root>
        {SERVICES.map((service: Service, index: number) => (
          <AnimationWrapper
            key={`service-${index}`}
            animation='animate-slide-in-up'
            delay={true}
          >
            <CardService service={service} />
          </AnimationWrapper>
        ))}
      </Section.Root>
      {/* ABOUT US */}
      <AboutUs />
      {/* MENU */}
      <Section.Root
        title='Food Menu'
        subtitle='Most Popilar Items'
        classNameContent='grid grid-cols-1 gap-4'
      >
        <Tabs
          tabs={tabsMenu}
          variant='menu'
          className='mx-auto flex items-center justify-center border-b-[1px]'
        />
      </Section.Root>
      {/* RESERVATION */}
      <Reservation />
      {/* TEAM MEMBERS */}
      <TeamMembers />
      {/* TESTIMONIAL */}
      <Testimonial />
    </>
  );
}
