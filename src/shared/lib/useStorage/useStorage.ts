import {Product} from "entities/products";

export enum StorageKeys {
  PRODUCTS = 'product',
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export interface StorageItems {
  [StorageKeys.PRODUCTS]: Array<Product>;
  [StorageKeys.ACCESS_TOKEN]: string;
  [StorageKeys.REFRESH_TOKEN]: string;
}

export type ValueType = Array<Product> | string | undefined;

const useStorage = (isLocalStorage: boolean = false) => {
  // Select between localStorage and sessionStorage based on the flag
  const storage = isLocalStorage ? localStorage : sessionStorage;

  const getItem = (key: string) => {
    return storage.getItem(key);
  };

  const setItem = (key: string, value: ValueType) => {
    storage.setItem(key, JSON.stringify(value));
  };

  const getParsedItem = (key: string) => {
    const itemString = getItem(key);
    if (itemString) return JSON.parse(itemString);
  };

  const removeItem = (key: string) => {
    storage.removeItem(key);
  };

  const clear = () => {
    storage.clear();
  };

  return {
    getItem,
    setItem,
    getParsedItem,
    removeItem,
    clear
  };
};

export default useStorage;
