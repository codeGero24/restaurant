import Section from '@components/layout/Section';
import { services } from '@mock/services';
import Card from '@components/ui/Card';
import Icon from '@components/ui/Icon';
import { clsx } from 'clsx';

export default function ServicePage() {
  return (
    <>
      <Section className={clsx('px-5 py-5 md:py-12 lg:gap-12')}>
        <div className={clsx('section__header', 'pb-12 text-center')}>
          <h1>Explore Our Services</h1>
        </div>

        <div
          className={clsx(
            'section__content',
            'grid grid-cols-1 gap-4',
            'md:grid-cols-2 md:gap-8',
            'lg:grid-cols-4'
          )}
        >
          {services.map(service => (
            <Card
              key={service.title}
              {...service}
              className={clsx('grid grid-cols-1 gap-2 rounded-md bg-white p-4 shadow-sm')}
            >
              <Icon {...service.icon} />
            </Card>
          ))}
          {services.map(service => (
            <Card
              key={service.title}
              {...service}
              className={clsx('grid grid-cols-1 gap-2 rounded-md bg-white p-4 shadow-sm')}
            >
              <Icon {...service.icon} />
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
