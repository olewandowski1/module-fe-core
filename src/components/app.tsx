import { useDynamicRouter } from '@/hooks/use-dynamic-router';
import { ModulesManagerInjector } from '@/providers/modules-manager-inject';
import { rootRoute } from '@/services/router';
import { ModulesManagerType } from '@/types/modules';
import { RouterProvider } from '@tanstack/react-router';

/**
 * @name App
 *
 * @description
 * This component is responsible for rendering the main application
 * and injecting the Modules Manager down the component tree.
 */
export const App: React.FC<{ modulesManager: ModulesManagerType }> = ({
  modulesManager,
}) => {
  const { routes } = modulesManager;
  const { router } = useDynamicRouter({ rootRoute, routes });

  // Router has to be defined. If it's not, do not render anything.
  if (!router) {
    return null;
  }

  return (
    <ModulesManagerInjector modulesManager={modulesManager}>
      <RouterProvider router={router} />
    </ModulesManagerInjector>
  );
};
