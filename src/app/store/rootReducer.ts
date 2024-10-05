import { type ConfigureStoreOptions } from '@reduxjs/toolkit';
import { baseApi } from 'shared/api/index';
import {searchReducer} from "features/search";

export const rootReducer: ConfigureStoreOptions['reducer'] = {
  [baseApi.reducerPath]: baseApi.reducer,
  searchReducer: searchReducer
};
