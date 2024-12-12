import { ModulesManagerType } from '@/types/modules';
import { createContext, useContext } from 'react';

const ModulesManagerContext = createContext<ModulesManagerType | undefined>(
  undefined
);

// This is a provider that injects the modules manager into the context. It should wrap the root component of the application.
// It takes a `modulesManager` prop which is initialized in the `AppContainer` component.
export const ModulesManagerInjector: React.FC<{
  modulesManager: ModulesManagerType;
  children: React.ReactNode;
}> = ({ children, modulesManager }) => {
  return (
    <ModulesManagerContext.Provider value={modulesManager}>
      {children}
    </ModulesManagerContext.Provider>
  );
};

// This is a hook that allows components to access the Modules Manager.
export const useModulesManager = () => {
  const context = useContext(ModulesManagerContext);

  if (context === undefined) {
    throw new Error(
      '[MODULES_MANAGER_INJECT]: useModulesManager must be used within a ModulesManagerInjector'
    );
  }

  return context;
};
