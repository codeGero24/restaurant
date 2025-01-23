import { RoutChildren } from "@types.app/router";

export type getMainPagesParams = {
  pages?: RoutChildren[];
  excludePath?: string;
};

export type isActivePageParams = {
  path: string;
};
