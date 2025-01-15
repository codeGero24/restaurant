import { clsx } from 'clsx';
import AnimationWrapper from '@components/layout/AnimationWrapper';
import Card from '@components/ui/Card';
import Icon from '@components/ui/Icon';
import TeamMembers from '@components/ui/TeamMembers';
import Section from '@components/layout/Section';
import './Home.scss';

import MOCK_DATA from '@mock/index';

export default function HomePage() {
  const { services } = MOCK_DATA;

  return (
    <>
      {/* SERVICES */}
      <Section>
        {services.map((service, index) => (
          <AnimationWrapper
            key={`service-${index}`}
            animation="animate-slide-in-up"
            delay={true}
          >
            <Card.Root
              {...service}
              className={clsx(
                'md:p-8',
                'hover:bg-primary hover:text-white hover:transition-colors hover:duration-500 hover:ease-linear',
              )}
            >
              <Icon {...service.icon} />
            </Card.Root>
          </AnimationWrapper>
        ))}
      </Section>
      {/* ABOUT US */}
      {/* MENU */}
      <Section title="Food Menu" subTitle="Most Popilar Items">
        tabs menu
      </Section>
      {/* RESERVATION */}
      {/* TEAM MEMBERS */}
      <TeamMembers />
      {/* TESTIMONIAL */}
    </>
  );
}
