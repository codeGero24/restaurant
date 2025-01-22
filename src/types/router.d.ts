export type RoutChildren = {
  path: string;
  name: string;
  title: string;
  element: React.ReactNode;
  group?: string;
  requiresAuth?: boolean;
  roles?: string[];
};

export interface Rout {
  path: string;
  element: React.ReactNode;
  errorElement: React.ReactNode;
  children: RoutChildren[];
}
