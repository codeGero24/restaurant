import { routes } from '@router/routes';
import { Page, getMainPagesParams } from '@types.app/utils';

export const getAllPages = () => routes[0].children as Page[];

export const findPage = (path: string) => getAllPages().find(page => page.path === path);

export const isCurrentPage = (currentPath: string, path: string): boolean => {
  return currentPath === path;
};

export const groupedPageBygroup = (pages: Page[]): [string, Page[]][] => {
  type acc = { [key: string]: Page[] };

  const gropedPage = pages.reduce((acc: acc, page: Page) => {
    const group = page.group || 'ungrouped';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(page);
    return acc;
  }, {});

  return Object.entries(gropedPage).filter(([group]) => group !== 'ungrouped');
};

export const getPagesGroup = (pages?: Page[]) => {
  const allPage = pages?.length ? pages : getAllPages();
  return groupedPageBygroup(allPage);
};

export const getMainPages = ({ pages, excludePath }: getMainPagesParams) => {
  const allPage = pages?.length ? pages : getAllPages();
  return allPage.filter(page => Boolean(!page.group) && page.path !== excludePath);
};
