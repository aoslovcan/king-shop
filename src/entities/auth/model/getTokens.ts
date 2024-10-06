import { StorageKeys, useStorage } from 'shared/lib';

export const getToken = () => {
  const { getParsedItem } = useStorage();

  return getParsedItem(StorageKeys.ACCESS_TOKEN) || getParsedItem(StorageKeys.REFRESH_TOKEN);
};
