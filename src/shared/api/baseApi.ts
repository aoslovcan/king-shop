import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from 'shared/lib';
import {CLIENT_TAG, PRODUCT_TAG} from './tags.ts';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiUrl
  }),

  tagTypes: [CLIENT_TAG, PRODUCT_TAG],
  endpoints: () => ({})
});
