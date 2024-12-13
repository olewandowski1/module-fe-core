import HomePage from '@/pages/home-page';
import { ROUTE_PATHS } from '@/routes';
import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

// Root route is the parent route for all routes in the application.
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// Home route is the route for the home page.
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_PATHS.HOME,
  component: HomePage,
});

// Static routes are routes that are not dynamic and are always present
export const staticRoutes = [homeRoute];
