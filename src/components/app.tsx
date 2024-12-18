import { useDynamicRouter } from '@/hooks/use-dynamic-router';
import { rootRoute } from '@/services/router';
import { LocalesManagerType, ModulesManagerType } from '@/types/modules';
import { RouterProvider } from '@tanstack/react-router';

/**
 * @name App
 *
 * @description
 * This component is responsible for rendering the main application
 * and injecting the Modules Manager and Locales Manager down the component tree.
 */
export const App: React.FC<{
  modulesManager: ModulesManagerType;
  localesManager: LocalesManagerType;
}> = ({ modulesManager, localesManager }) => {
  const { router } = useDynamicRouter({
    rootRoute,
    modulesManager,
    localesManager,
  });

  // Router has to be defined. If it's not, do not render anything.
  if (!router) {
    return null;
  }

  return <RouterProvider router={router} />;
};
