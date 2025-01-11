import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { routes } from "@router/routes";
import Icon from "@components/ui/Icon";
import { Button } from "@components/ui/Button";
import NavItem from "@components/layout/Navbar/NavItem";
import "./Navbar.scss";

interface State {
  isOpenMenu: boolean;
  isOpenPages: boolean;
}

type Page = {
  path: string;
  name: string;
  group: string | undefined;
  element: JSX.Element;
};

export default function Navbar() {
  const initialState: State = {
    isOpenMenu: false,
    isOpenPages: false,
  };
  const [state, setState] = React.useState<State>(initialState);

  const location = useLocation();

  const isCurrentPage = (path: string) => location.pathname === path;

  const toggleMenu = React.useCallback(() => {
    setState((prev) => ({ ...prev, isOpenMenu: !prev.isOpenMenu }));
  }, []);

  const togglePages = React.useCallback(() => {
    setState((prev) => ({ ...prev, isOpenPages: !prev.isOpenPages }));
  }, []);

  const groupedPageBygroup = (pages: Page[]): [string, Page[]][] => {
    type acc = { [key: string]: Page[] };

    const gropedPage = pages.reduce((acc: acc, page: Page) => {
      const group = page.group || "ungrouped";
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(page);
      return acc;
    }, {});

    return Object.entries(gropedPage).filter(([group]) => group !== "ungrouped");
  };

  const allPages = (routes[0].children || []) as Page[];
  const pagesGroup = groupedPageBygroup(allPages);
  const mainPages = allPages.filter(
    (page) => Boolean(!page.group) && page.name.toLocaleLowerCase() !== "contact"
  );
  const contactPage = allPages.find(
    (page) => page.name.toLocaleLowerCase() === "contact"
  );

  const navItems = React.useMemo(
    () => (
      <>
        {mainPages.map((page) => (
          <NavItem
            key={page.path}
            className={clsx(
              "hover:text-primary font-[500] transition-all duration-700 uppercase",
              isCurrentPage(page.path) && "text-primary"
            )}
            {...page}
          />
        ))}
        {pagesGroup.map(([nameGroup, pagesGroup]) => (
          <li key={nameGroup} className="relative">
            <Button
              type="button"
              className="hover:text-primary text-white font-[500] uppercase"
              onClick={togglePages}
              onMouseEnter={togglePages}
            >
              {nameGroup}
              <Icon name="ChevronDown" className="inline" size={20} />
            </Button>
            <ul
              className={clsx(
                "relative flex flex-col bg-white w-4/5 shadow-md overflow-hidden transition-all duration-700",
                "lg:absolute lg:top-[52px] lg:left-[-2rem] lg:min-w-[10rem]",
                state.isOpenPages ? " max-h-screen opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {pagesGroup.map((page) => (
                <li
                  className={clsx(
                    "mt-2 px-4 py-2",
                    isCurrentPage(page.path) ? "bg-primary" : "lg:hover:bg-gray-200"
                  )}
                  key={page.path}
                >
                  <NavItem
                    className={clsx(
                      "block text-black",
                      isCurrentPage(page.path) && "text-white lg:hover:"
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
              "hover:text-primary font-[500] transition-all duration-700 uppercase",
              isCurrentPage(contactPage.path) && "text-primary"
            )}
            {...contactPage}
          />
        )}
        <li className="py-2 lg:py-0">
          <NavLink
            to="/"
            className={clsx(
              "w-1/2 lg:w-full px-6 py-3 font-[500] uppercase bg-primary rounded-sm",
              "hover:brightness-110"
            )}
          >
            Book A Table
          </NavLink>
        </li>
      </>
    ),
    [location, state]
  );

  return (
    <>
      <nav className="flex justify-end w-1/3 lg:w-2/3">
        {/* NavLinks - Desktop */}
        <ul
          className={clsx(
            "hidden",
            "lg:flex lg:items-center lg:justify-between lg:gap-6"
          )}
        >
          {navItems}
        </ul>
        {/* Burget Menu - Mobile*/}
        <div className="lg:hidden">
          <Button
            type="button"
            className={clsx(
              "border-[1px] border-gray-600 rounded-lg px-3 py-1",
              "focus:ring-4 focus:ring-white focus:ring-opacity-10"
            )}
            onClick={toggleMenu}
          >
            <Icon name="Menu" className="icon" />
          </Button>
        </div>
      </nav>
      {/* NavLinks - Mobile */}
      <div
        className={clsx(
          "w-full border-t-[1.5px] border-gray-600 shadow-md transition-all duration-500 overflow-hidden lg:hidden",
          state.isOpenMenu
            ? "mt-4 pt-4 max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-5"
        )}
      >
        <ul className="flex flex-col gap-4">{navItems}</ul>
      </div>
    </>
  );
}
