import React from 'react';
import Tabs from '@components/ui/Tabs';
import CardPlate from '@components/ui/Card/Plate';
import Section from '@components/layout/Section';

import useMenuStore from '@stores/menu.store';
import AnimationWrapper from '@components/layout/AnimationWrapper';

const MenuSection = () => {
  const { menu } = useMenuStore();

  React.useEffect(() => {
    // - console.log('menu', menu);
  }, [menu]);

  return (
    <Section.Root
      title='Food Menu'
      subtitle='Most Popilar Items'
      classNameContent='grid grid-cols-1 gap-4'
    >
      <AnimationWrapper animation='animate-slide-in-up'>
        <Tabs
          tabs={menu.tabs}
          variant='menu'
          className='mx-auto flex items-center justify-center border-b-[1px]'
        />
        <div className='grid min-h-[500px] grid-cols-1 place-content-start lg:grid-cols-2'>
          {menu.plates.map(plate => (
            <CardPlate key={`plate-${plate.id}`} plate={plate} />
          ))}
        </div>
      </AnimationWrapper>
    </Section.Root>
  );
};

export default MenuSection;
