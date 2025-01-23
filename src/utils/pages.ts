import { page } from '@types.app/index';
import { navPages, navPagesGroup } from '@constants/navbar';

export const findPage = (path: string, pages: page[]) => {
  const allPage = pages?.length ? pages : navPages;
  return allPage.find(page => page.path === path);
};

export const isActivePage = (currentPath: string, path?: string): boolean => {
  return currentPath === path;
};

export const isActivePageGroup = (currentPath: string, pagesGroup?: page[]): boolean => {
  pagesGroup = pagesGroup || navPagesGroup;
  const isPageGroup = Boolean(pagesGroup.find(page => currentPath === page.path));
  return isPageGroup;
};

export const groupedPageByGroup = (pages: page[]): [string, page[]][] => {
  // Ordina le pagine in base all'ordine
  const sortedPages = [...pages].sort((a, b) => {
    const orderA = a.order || Infinity;
    const orderB = b.order || Infinity;
    return orderA - orderB;
  });

  // Raggruppa le pagine mantenendo l'ordine
  const groupedPages = sortedPages.reduce(
    (acc, page) => {
      const group = page.group || 'ungrouped';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(page);
      return acc;
    },
    {} as { [key: string]: page[] }
  );

  // Converti l'oggetto raggruppato in un array di tuple
  return Object.entries(groupedPages);
};

export const getPagesByGroup = (pages?: page[]) => {
  const allPage = pages?.length ? pages : navPages;
  return groupedPageByGroup(allPage);
};
