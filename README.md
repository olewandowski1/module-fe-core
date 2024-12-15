## Introduction

The `module-fe-core` is the main dependency of the `[module-fe-assembly](https://github.com/olewandowski1/module-fe-assembly/)` module. Its aim is to provide centralized utilities and patterns for development, as well as sharing some generic components and configuration. This core module acts as the backbone for the entire application, ensuring consistency and reusability across different modules.

### Purpose

The primary purpose of the `core` module is to:

- Provide centralized utilities and development patterns.
- Share generic components and configuration.
- Ensure consistency and reusability across different modules.
- Serve as the foundation for the `assembly` module.

## Tech Stack

The `core` module leverages modern technologies to create a robust and efficient development environment:

- Foundation: **React 19 with TypeScript**
- Build Tool: **Vite 6**
- Styling: **Tailwind CSS**
- UI Library: **shadcn/ui**
- State Management: **Zustand**
- Routing: **Tanstack Router**

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/olewandowski1/module-fe-core
   cd module-fe-core
   ```

### Installing Dependencies

2. Install the required dependencies:
   ```bash
   pnpm install
   ```

### Linking Modules for Development

3. Link `core` for local development. First, create a link from the `core` package. Then, inside the `assembly` module, link it.

   ```bash
   pnpm link --global

   cd ../module-fe-assembly
   pnpm link --global @module/fe-core
   ```

### Enable HMR

4. Start the Vite development server to enable Hot Module Replacement (HMR) by running the following command.

   ```bash
   pnpm start
   ```

## How-To?

### How to modify the App theme?

- The `module-fe-core` module uses Tailwind CSS for styling. You can modify the `core-tailwind-preset.ts` file, which is distributed to all linked modules (linked to `assembly`). If you want to overwrite any value, you can do it through the `tailwind.config.ts` file.

### How to create a new route?

- First, you need to define a **unique** path inside the `routes.ts` file (`ROUTE_PATHS` constant).
  - **Static Routes**: You can define static routes inside the `/services/router.ts` file. **NOTE**: Defining a static route is possible only in `core` module.
  - **Dynamic Routes**: You can export a dynamic route from the `index.tsx` file. It will be fetched from the module and initialized inside the Router.

### How to handle new translation?

- To handle a new translation, you need to add a new entry to the `en.json` file. In the `core` module, this has to be in a namespace called `core`. The pattern for adding it is `COMPONENT_NAME.DETAIL`. Then, you can use the `formatMessage` function to utilize the new translation.

  - Example:
    ```json
    // locales/en.json
    {
      "core": {
        "HomePage.welcome": "Welcome from the `fe-core` HomePage component.",
        "SettingsPage.welcome": "Welcome from the `fe-core` SettingsPage component.",
        "NewComponent.message": "This is a new message for the NewComponent."
      }
    }
    ```
  - Usage:

    ```typescript
    import { formatMessage } from '@/lib/translations';

    // components/new-component.tsx
    const NewComponent = () => {
      return (
        <div>
          <p>{formatMessage('core', 'NewComponent.message')}</p>
        </div>
      );
    };
    ```
