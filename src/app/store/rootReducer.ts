import { type ConfigureStoreOptions } from '@reduxjs/toolkit';
import { baseApi } from 'shared/api/index';
import {searchReducer} from "features/search";
import {authReducer} from "entities/auth";

export const rootReducer: ConfigureStoreOptions['reducer'] = {
  [baseApi.reducerPath]: baseApi.reducer,
  searchReducer: searchReducer,
  auth: authReducer,
};
