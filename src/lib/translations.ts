import { useManagers } from '@/hooks/use-managers';

export const formatMessage = (namespace: string, key: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { localesManager } = useManagers();

  return localesManager.formatMessage(namespace, key);
};
