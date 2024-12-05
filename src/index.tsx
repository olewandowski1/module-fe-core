// Import global styles
import '@/styles/globals.css';

import { App } from '@/components/app';
import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

// Main entry point for the module, include all configurations here
const CORE_MODULE_CONFIG = {
  contributionExample: ['App', 'Button'],
};

// Export all components and utils to be used by other modules
export { App, Button, cn };

export default CORE_MODULE_CONFIG;
