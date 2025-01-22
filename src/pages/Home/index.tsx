import CardService from '@components/ui/Card/Service';
import AboutUs from '@components/AboutUs';
import Reservation from '@components/Reservation';
import TeamMembers from '@components/TeamMembers';
import Testimonial from '@components/Testimonial';
import MenuSection from '@components/MenuSection';

import Section from '@components/layout/Section';
import AnimationWrapper from '@components/layout/AnimationWrapper';

// - Types
import { Service } from '@types.app/data';
// - Mock
import { SERVICES } from '@mock/index';
import Skeleton from '@components/ui/Skeleton';

export default function HomePage() {
  return (
    <>
      <Skeleton name='card' />
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
      <MenuSection />
      {/* RESERVATION */}
      <Reservation />
      {/* TEAM MEMBERS */}
      <TeamMembers />
      {/* TESTIMONIAL */}
      <Testimonial />
    </>
  );
}
