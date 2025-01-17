import React from 'react';
import Icon from '@components/ui/Icon';

//- Types
import { nameIcon } from '@types.app/ludice';
import { clsx } from 'clsx';
import Button from '@components/ui/Button';

interface TabProps {
  title: string;
  content: string;
  nameIcon?: nameIcon;
  className?: string;
}

const TabMenu = React.memo(
  ({ className, title, content, nameIcon = 'Utensils' }: TabProps) => {
    const classNameCustom =
      className ||
      'flex gap-2 items-center py-2 mr-2 last:mr-0 hover:border-b-[2px] hover:border-primary lg:mr-12';

    return (
      <Button type='button' className={clsx('tab-menu', classNameCustom)}>
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
