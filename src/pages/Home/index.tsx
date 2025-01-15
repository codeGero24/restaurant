import AnimationWrapper from '@components/layout/AnimationWrapper';
import TeamMembers from '@components/ui/TeamMembers';
import Section from '@components/layout/Section';
import './Home.scss';

import MOCK_DATA from '@mock/index';
import CardService, { Service } from '@components/ui/Card/Service';

export default function HomePage() {
  const { services } = MOCK_DATA;

  return (
    <>
      {/* SERVICES */}
      <Section>
        {services.map((service: Service, index: number) => (
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
