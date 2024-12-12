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

export type ModulesManagerType = {
  modules: Module[];
  refs: Ref[];
  loadModules: () => void;
  loadRefs: () => void;
  getRef: (name: string) => Ref | undefined;
};
