import { LocalesManagerType, ModulesManagerType } from '@/types/modules';
import { useLocation, useRouteContext } from '@tanstack/react-router';

/**
 * @name useManager
 *
 * @description
 * A hook that provides access to the Modules Manager and Locales Manager.
 */
export const useManagers = () => {
  const { pathname } = useLocation();
  const { localesManager, modulesManager } = useRouteContext({
    from: pathname,
  });

  return { localesManager, modulesManager } as {
    localesManager: LocalesManagerType;
    modulesManager: ModulesManagerType;
  };
};
