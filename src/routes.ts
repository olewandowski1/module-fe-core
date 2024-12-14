/**
 * @constant ROUTE_PATHS
 *
 * @description
 * The paths for the routes in the application. You should use these paths to navigate between pages.
 *
 * @example
 * 1. Define the new path in the ROUTE_PATHS object.
 * export const ROUTE_PATHS = {
 *  DASHBOARD: { _SELF: '/dashboard' },
 * };
 *
 * NOTE: The _SELF key is used to define the path for the route.
 * If you want to define a nested route, you can use the following format:
 * { _SELF: '/dashboard', WORKFLOW: { _SELF: '/workflow' } }.
 * This results in the following path: `/dashboard/workflow`.
 *
 * 2. Use ROUTE_PATHS.DASHBOARD in the routes array and create a new route.
 * routes: [
 *  {
 *    path: ROUTE_PATHS.DASHBOARD._SELF,
 *    component: DashboardPage,
 *  }
 * ] as Route[],
 */
export const ROUTE_PATHS = {
  _SELF: '/',
  SETTINGS: {
    _SELF: '/settings',
  },
  TEMPLATE: {
    _SELF: '/template',
  },
};
