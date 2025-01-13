export type Page = {
  path: string;
  name: string;
  title: string;
  group: string | undefined;
  element: JSX.Element;
};

export type getMainPagesParams = {
  pages?: Page[];
  excludePath?: string;
};

export type isCurrentPageParams = {
  // - location: Location;
  path: string;
};
