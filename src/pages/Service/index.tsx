import Section from '@components/layout/Section';
import CardService, { type Service } from '@components/ui/Card/Service';
import AnimationWrapper from '@components/layout/AnimationWrapper';

// - MOCK DATA
import MOCK_DATA from '@mock/index';

export default function ServicePage() {
  const { services } = MOCK_DATA;

  return (
    <>
      <Section title="Services" subTitle="Our Services">
        {services.concat(services).map((service: Service, index: number) => (
          <AnimationWrapper
            key={`service-${index}`}
            animation="animate-slide-in-up"
            delay={true}
          >
            <CardService service={service} />
          </AnimationWrapper>
        ))}
      </Section>
    </>
  );
}
