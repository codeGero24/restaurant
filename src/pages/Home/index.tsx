import Section from '@components/layout/Section';
import './Home.scss';
import { services } from '@mock/services';
import Card from '@components/ui/Card';
import Icon from '@components/ui/Icon';
import { clsx } from 'clsx';

export default function HomePage() {
  return (
    <>
      <Section
        className={clsx(
          'grid grid-cols-1 gap-4 py-5 px-5',
          'md:grid-cols-2 md:gap-8 md:py-12',
          'lg:grid-cols-4 lg:gap-12 md:py-16'
        )}
      >
        {services.map(service => (
          <Card
            key={service.title}
            {...service}
            className={clsx('grid grid-cols-1 gap-2 bg-white p-4 rounded-md shadow-md')}
          >
            <Icon {...service.icon} />
          </Card>
        ))}
      </Section>
    </>
  );
}
