import React from 'react';
import Icon from '@components/ui/Icon';

//- Types
import { nameIcon } from '@types.app/ludice';
import { clsx } from 'clsx';
import Button from '@components/ui/Button';
import { tabMenu } from '@types.app/data';
import useMenuStore from '@stores/menu.store';

interface TabProps {
  id: tabMenu['id'];
  title: string;
  content: string;
  nameIcon?: nameIcon;
  className?: string;
  isActive?: boolean;
}

const TabMenu = React.memo(
  ({
    id,
    className,
    title,
    content,
    nameIcon = 'Utensils',
    isActive = false,
  }: TabProps) => {
    const { setActiveTab } = useMenuStore();

    const classActive = isActive ? 'border-b-[2px] border-primary' : '';
    const classNameCustom =
      className ||
      clsx('flex gap-2 items-center py-2 mr-2 last:mr-0 lg:mr-12', classActive);

    return (
      <Button
        type='button'
        id={id}
        className={clsx('tab-menu', classNameCustom)}
        onClick={() => setActiveTab(id)}
      >
        <Icon
          className='h-[32px] w-[32px] text-primary lg:h-[48px] lg:w-[48px]'
          name={nameIcon}
          strokeWidth={'2px'}
        />
        <div>
          <p>{title}</p>
          <h5>{content}</h5>
        </div>
      </Button>
    );
  }
);

export default TabMenu;
