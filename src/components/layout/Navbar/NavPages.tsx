import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { findPage, getMainPages, getPagesGroup, isCurrentPage } from '@utils/pages';
import NavItem from './NavItem';
import Button from '@components/ui/Button';
import Icon from '@components/ui/Icon';
import useDevice from '@hooks/useDevice';

export default function NavPages() {
  const [isOpenPages, setIsOpenPages] = React.useState<boolean>(false);
  const { isDesktop } = useDevice();

  const location = useLocation();
  const mainPages = getMainPages({ excludePath: '/contact' });
  const pagesGroup = getPagesGroup();
  const contactPage = findPage('/contact');

  const togglePages = () => setIsOpenPages(prevState => !prevState);

  return (
    <>
      {mainPages.map(page => (
        <NavItem
          key={page.path}
          className={clsx(
            'font-[500] uppercase transition-all duration-700 hover:text-primary',
            isCurrentPage(location.pathname, page.path) && 'text-primary'
          )}
          {...page}
        />
      ))}
      {pagesGroup.map(([nameGroup, pagesGroup]) => (
        <li key={nameGroup} className="relative">
          <Button
            type="button"
            className="font-[500] uppercase text-white hover:text-primary"
            {...(isDesktop
              ? {
                  onMouseEnter: togglePages,
                  onClick: togglePages,
                }
              : {
                  onClick: togglePages,
                })}
          >
            {nameGroup}
            <Icon name="ChevronDown" className="inline" size={20} />
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
                className={clsx(
                  'mt-2 px-4 py-2',
                  isCurrentPage(location.pathname, page.path)
                    ? 'bg-primary'
                    : 'lg:hover:bg-gray-200'
                )}
                key={page.path}
              >
                <NavItem
                  className={clsx(
                    'block text-black',
                    isCurrentPage(location.pathname, page.path) && 'lg:hover: text-white'
                  )}
                  {...page}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
      {contactPage && (
        <NavItem
          key={contactPage.path}
          className={clsx(
            'font-[500] uppercase transition-all duration-700 hover:text-primary',
            isCurrentPage(location.pathname, contactPage.path) && 'text-primary'
          )}
          {...contactPage}
        />
      )}
      <li className="py-2">
        <NavLink
          to="/"
          className={clsx('button', 'w-1/2 px-6 py-3 font-[500] uppercase lg:w-full')}
        >
          Book A Table
        </NavLink>
      </li>
    </>
  );
}
