export type RoutChildren = {
  path: string;
  name: string;
  title: string;
  element: JSX.Element;
  group?: string;
  requiresAuth?: boolean;
  roles?: string[];
};

export interface Rout {
  path: string;
  element: JSX.Element;
  errorElement: JSX.Element;
  children: RoutChildren[];
}
