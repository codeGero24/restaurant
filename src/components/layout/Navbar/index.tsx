import React from 'react';
import { clsx } from 'clsx';
import useDevice from '@hooks/useDevice';
import Icon from '@components/ui/Icon';
import Button from '@components/ui/Button';
import NavPages from './NavPages';
import './Navbar.scss';

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
  const { isDesktop, isMobile } = useDevice();

  const toggleMenu = () => setIsOpenMenu(prevState => !prevState);

  return (
    <>
      <nav className="flex w-1/3 justify-end lg:w-2/3">
        {/* NavPages - Desktop */}
        {isDesktop && (
          <ul className="flex items-center justify-between gap-6">
            <NavPages />
          </ul>
        )}

        {/* Burget Menu - Mobile*/}
        {isMobile && (
          <Button
            type="button"
            className={clsx(
              'rounded-lg border-[1px] border-gray-600 px-3 py-1',
              'focus:ring-4 focus:ring-white focus:ring-opacity-10'
            )}
            onClick={toggleMenu}
          >
            <Icon name="Menu" className="icon" />
          </Button>
        )}
      </nav>
      {/* NavPages - Mobile */}
      {isMobile && (
        <div
          className={clsx(
            'w-full overflow-hidden border-t-[1.5px] border-gray-600 shadow-md transition-all duration-500',
            isOpenMenu
              ? 'mt-4 max-h-screen translate-y-0 pt-4 opacity-100'
              : 'max-h-0 translate-y-5 opacity-0'
          )}
        >
          <ul className="flex flex-col gap-4">
            <NavPages />
          </ul>
        </div>
      )}
    </>
  );
}
