// Import global styles
import '@/styles/globals.css';

import { App } from '@/components/app';
import { useManagers } from '@/hooks/use-managers';
import { formatMessage } from '@/lib/translations';
import { cn } from '@/lib/utils';
import en from '@/locales/en.json';
import SettingsPage from '@/pages/settings-page';
import { ROUTE_PATHS } from '@/routes';
import {
  type LocalesManagerType,
  type Module,
  type ModulesManagerType,
  type Ref,
  type Route,
  type Translation,
} from '@/types/modules';

// Main entry point for the module, include all configurations here
const CORE_MODULE_CONFIG = {
  translations: { en },
  refs: [
    {
      key: 'button',
      value: 'Button',
    },
  ] as Ref[],
  routes: [
    {
      path: ROUTE_PATHS.SETTINGS._SELF,
      component: SettingsPage,
    },
  ] as Route[],
};

export {
  App,
  cn,
  formatMessage,
  LocalesManagerType,
  Module,
  ModulesManagerType,
  Ref,
  Route,
  ROUTE_PATHS,
  Translation,
  useManagers,
};

export default CORE_MODULE_CONFIG;
