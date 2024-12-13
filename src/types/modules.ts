import { JSX } from 'react';

export type Module = {
  name: string;
  entry: Record<string, any>;
};

export type Ref = {
  key: string;
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
