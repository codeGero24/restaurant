import TeamMembers from '@components/ui/TeamMembers';
import CardService from '@components/ui/Card/Service';
import Section from '@components/layout/Section';
import AnimationWrapper from '@components/layout/AnimationWrapper';

// - Types
import { Service } from '@types.app/data';
// - Mock
import { SERVICES } from '@mock/index';
import AboutUs from '@components/ui/AboutUs';
import Testimonial from '@components/ui/Testimonial';

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
      <Section.Root title='Food Menu' subtitle='Most Popilar Items'></Section.Root>
      {/* RESERVATION */}
      {/* TEAM MEMBERS */}
      <TeamMembers />
      {/* TESTIMONIAL */}
      <Testimonial />
    </>
  );
}
