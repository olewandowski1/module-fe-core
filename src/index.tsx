// Import global styles
import '@/styles/globals.css';

import { App } from '@/components/app';
import { cn } from '@/lib/utils';
import SettingsPage from '@/pages/settings-page';
import { useModulesManager } from '@/providers/modules-manager-inject';
import { ROUTE_PATHS } from '@/routes';
import {
  type Module,
  type ModulesManagerType,
  type Ref,
  type Route,
} from '@/types/modules';

// Main entry point for the module, include all configurations here
const CORE_MODULE_CONFIG = {
  refs: [
    {
      key: 'button',
      value: 'Button',
    },
  ] as Ref[],
  routes: [
    {
      path: ROUTE_PATHS.SETTINGS,
      component: SettingsPage,
    },
  ] as Route[],
};

export {
  // Exported components
  App,
  cn,
  // Exported types
  Module,
  ModulesManagerType,
  Ref,
  Route,
  ROUTE_PATHS,
  // Exported utils
  useModulesManager,
};

export default CORE_MODULE_CONFIG;
