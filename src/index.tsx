// Import global styles
import '@/styles/globals.css';

import { App } from '@/components/app';
import { cn } from '@/lib/utils';
import { useModulesManager } from '@/providers/modules-manager-inject';
import {
  type Module,
  type ModulesManagerType,
  type Ref,
} from '@/types/modules';

// Main entry point for the module, include all configurations here
const CORE_MODULE_CONFIG = {
  refs: [
    {
      key: 'button',
      value: 'Button',
    },
  ] as Ref[],
};

export {
  // Exported components
  App,
  cn,
  // Exported types
  Module,
  ModulesManagerType,
  Ref,
  // Exported utils
  useModulesManager,
};

export default CORE_MODULE_CONFIG;
