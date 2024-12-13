import { JSX } from 'react';

export type Module = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry: Record<string, any>;
};

export type Ref = {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: React.FC<any> | string | number | boolean;
};

export type Route = {
  path: string;
  component: () => JSX.Element;
};

export type ModulesManagerType = {
  modules: Module[];
  refs: Ref[];
  routes: Route[];
  loadModules: () => void;
  loadRefs: () => void;
  loadRoutes: () => void;
  getRef: (name: string) => Ref | undefined;
};
