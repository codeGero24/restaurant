import React from 'react';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';

import useDevice from '@hooks/useDevice';
import { isActivePage, isActivePageGroup } from '@utils/pages';

// - Types
import { page } from '@types.app/constants';

interface NavLinkOrGroupProps {
  nameGroup: string;
  pagesGroup: page[];
}

const NavLinkOrGroup = ({ nameGroup, pagesGroup }: NavLinkOrGroupProps) => {
  const [isOpenPages, setIsOpenPages] = React.useState<boolean>(false);
  const location = useLocation();
  const { isDesktop } = useDevice();

  const togglePages = React.useCallback(
    () => setIsOpenPages(!isOpenPages),
    [isOpenPages]
  );

  React.useEffect(() => {
    setIsOpenPages(false);
  }, [location]);

  if (nameGroup === 'ungrouped' || pagesGroup.length === 1) {
    return (
      <>
        {pagesGroup.map(page => (
          <li key={page.path}>
            <NavLink
              to={page.path}
              className={clsx(
                'font-[500] uppercase transition-all duration-700 hover:text-primary',
                isActivePage(location.pathname, page.path) && 'text-primary'
              )}
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </>
    );
  }

  return (
    <>
      <li key={nameGroup} className='relative'>
        <Button
          type='button'
          className={clsx(
            'font-[500] uppercase hover:text-primary',
            isActivePageGroup(location.pathname, pagesGroup)
              ? 'text-primary'
              : 'text-white'
          )}
          onClick={togglePages}
          {...(isDesktop && {
            onMouseEnter: togglePages,
          })}
        >
          {nameGroup}
          <Icon name='ChevronDown' className='inline' size={20} />
        </Button>
        <ul
          className={clsx(
            'relative flex w-4/5 flex-col overflow-hidden bg-white shadow-md transition-all duration-700',
            'lg:absolute lg:left-[-2rem] lg:top-[52px] lg:min-w-[10rem]',
            isOpenPages ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          {pagesGroup.map(page => (
            <li
              key={page.path}
              className={clsx(
                'mt-2 px-4 py-2',
                isActivePage(location.pathname, page.path)
                  ? 'bg-primary'
                  : 'lg:hover:bg-gray-200'
              )}
            >
              <NavLink
                to={page.path}
                className={clsx(
                  'block text-black',
                  isActivePage(location.pathname, page.path) && 'lg:hover: text-white'
                )}
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default NavLinkOrGroup;
