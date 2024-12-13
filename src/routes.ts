/**
 * @constant ROUTE_PATHS
 *
 * @description
 * The paths for the routes in the application. You should use these paths to navigate between pages.
 *
 * @example
 * 1. Define the new path in the ROUTE_PATHS object.
 * export const ROUTE_PATHS = {
 *  DASHBOARD: '/dashboard',
 * };
 *
 * 2. Use ROUTE_PATHS.DASHBOARD in the routes array and create a new route.
 * routes: [
 *  {
 *    path: ROUTE_PATHS.DASHBOARD,
 *    component: DashboardPage,
 *  }
 * ] as Route[],
 */
export const ROUTE_PATHS = {
  HOME: '/',
  SETTINGS: '/settings',
  TEMPLATE: '/template',
};
