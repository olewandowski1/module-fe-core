import { RootLayout } from '@/components/root-layout';
import HomePage from '@/pages/home-page';
import { ROUTE_PATHS } from '@/routes';
import { createRootRoute, createRoute } from '@tanstack/react-router';

// Root route is the parent route for all routes in the application.
export const rootRoute = createRootRoute({
  component: RootLayout,
});

// Home route is the route for the home page.
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_PATHS._SELF,
  component: HomePage,
});

// Static routes are routes that are not dynamic and are always present
export const staticRoutes = [homeRoute];
