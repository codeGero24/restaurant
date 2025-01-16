import React from 'react';
import { clsx } from 'clsx';
import Card from '@components/ui/Card';
import Icon from '@components/ui/Icon';

// - Types
import { Service } from '@types.app/index';

interface CardServiceProps {
  service: Service;
}

const CardService = React.memo(({ service }: CardServiceProps) => {
  return (
    <>
      <Card.Root
        {...service}
        className={clsx(
          'hover:bg-primary hover:text-white hover:transition-colors hover:duration-500 hover:ease-linear',
        )}
      >
        <Card.Header className="mb-4">
          <Icon {...service.icon} />
        </Card.Header>
      </Card.Root>
    </>
  );
});

export default CardService;
