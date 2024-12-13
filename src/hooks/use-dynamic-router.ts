import { RouterType, UseDynamicRouterParams } from '@/types/tanstack-router';
import { createRoute, createRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { staticRoutes } from '@/services/router';

/**
 * @name useDynamicRouter
 *
 * @description
 * A hook that creates a dynamic router based on the routes provided by all linked modules.
 */
export const useDynamicRouter = ({
  rootRoute,
  routes,
}: UseDynamicRouterParams) => {
  const [router, setRouter] = useState<RouterType | null>(null);

  useEffect(() => {
    const initializeRouter = async () => {
      const dynamicRoutes = routes.map((route) =>
        createRoute({
          getParentRoute: () => rootRoute,
          path: route.path,
          component: route.component,
        })
      );

      const routeTree = rootRoute.addChildren([
        ...staticRoutes,
        ...dynamicRoutes,
      ]);

      const createdRouter = createRouter({ routeTree });

      setRouter(createdRouter);
    };

    initializeRouter();
  }, [rootRoute, routes]);

  return { router };
};
