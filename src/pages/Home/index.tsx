import TeamMembers from '@components/ui/TeamMembers';
import CardService from '@components/ui/Card/Service';
import Section from '@components/layout/Section';
import AnimationWrapper from '@components/layout/AnimationWrapper';
import './Home.scss';

// - Types
import { Service } from '@types.app/data';
// - Mock
import { SERVICES } from '@mock/index';

export default function HomePage() {
  return (
    <>
      {/* SERVICES */}
      <Section>
        {SERVICES.map((service: Service, index: number) => (
          <AnimationWrapper
            key={`service-${index}`}
            animation="animate-slide-in-up"
            delay={true}
          >
            <CardService service={service} />
          </AnimationWrapper>
        ))}
      </Section>
      {/* ABOUT US */}
      {/* MENU */}
      <Section title="Food Menu" subTitle="Most Popilar Items">
        .
      </Section>
      {/* RESERVATION */}
      {/* TEAM MEMBERS */}
      <TeamMembers />
      {/* TESTIMONIAL */}
    </>
  );
}
