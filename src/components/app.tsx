import { ModulesManagerInjector } from '@/providers/modules-manager-inject';
import { ModulesManagerType } from '@/types/modules';

export const App: React.FC<{ modulesManager: ModulesManagerType }> = ({
  modulesManager,
}) => {
  return (
    <ModulesManagerInjector modulesManager={modulesManager}>
      <div> @Module App </div>
    </ModulesManagerInjector>
  );
};
