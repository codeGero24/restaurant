import React from 'react';
import SolidIcon from '@components/ui/Icon/Solid';

interface TabProps {
  title: string;
  content: string;
  className?: string;
}

const TabIfo = React.memo(({ className, title, content }: TabProps) => {
  const classNameCustom = className || 'grid grid-cols-1 gap-2';
  return (
    <li className={classNameCustom}>
      <h5 className='section-title left-none font-pacifico text-2xl font-normal text-primary'>
        {title}
      </h5>
      <p>
        <SolidIcon
          className='mr-1 inline-block'
          color='white'
          fill='var(--color-primary)'
          size={20}
          name='MailOpen'
        />
        {content}
      </p>
    </li>
  );
});

export default TabIfo;
