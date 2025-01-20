import React from 'react';
import { clsx } from 'clsx';
import Card from '@components/ui/Card';
import Image from '@components/ui/Image';

// - Types
import { plate } from '@types.app/index';

interface CardPlateProps {
  plate: plate;
}

const CardPlate = React.memo(({ plate }: CardPlateProps) => {
  return (
    <>
      <Card.Root className={clsx('w-full cursor-pointer p-4')}>
        <Card.Content className='flex gap-6'>
          <Image className='h-[80px] w-[80px]' src={plate.img.src} alt={plate.img.alt} />
          <div className='flex w-full flex-col gap-2'>
            <div className='flex justify-between border-b border-gray-300 py-2'>
              <h5 className='mb-0'>{plate.name}</h5>
              <p className='font-nunito text-xl text-primary'>{`$${plate.prince}`}</p>
            </div>
            <p className='text-sm'>
              <i>{plate.description}</i>
            </p>
          </div>
        </Card.Content>
      </Card.Root>
    </>
  );
});

export default CardPlate;
