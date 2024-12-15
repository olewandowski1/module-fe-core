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

export type Translation = Record<string, Record<string, string>>;

export type ModulesManagerType = {
  modules: Module[];
  refs: Ref[];
  routes: Route[];
  loadModules: () => void;
  loadRefs: () => void;
  loadRoutes: () => void;
  getRef: (name: string) => Ref | undefined;
};

export type LocalesManagerType = {
  translations: Translation;
  loadTranslations: (modules: ModulesManagerType['modules']) => void;
  formatMessage: (namespace: string, key: string) => string;
};
