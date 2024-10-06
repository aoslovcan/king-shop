// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { env } from 'shared/lib';
// import {CLIENT_TAG, PRODUCT_TAG} from './tags.ts';
//
// export const baseApi = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: env.apiUrl
//   }),
//
//   tagTypes: [CLIENT_TAG, PRODUCT_TAG],
//   endpoints: () => ({})
// });

import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';
import { env, useStorage, StorageKeys } from 'shared/lib';
import { getToken } from 'entities/auth';
import { RootState } from 'app/store/store';
import { CLIENT_TAG, PRODUCT_TAG } from './tags.ts';

export const baseQuery = fetchBaseQuery({
  baseUrl: env.apiUrl,

  prepareHeaders: (
    headers: Headers,
    { options }: { options?: { excludeHeaders?: boolean }; getState?: () => RootState }
  ) => {
    if (!options?.excludeHeaders) {
      // Add custom headers to the existing headers
      const customHeaders = new Headers();
      const token = getToken();

      if (token) {
        customHeaders.set('Authorization', `Bearer ${token}`);
      }
      customHeaders.set('Content-Type', 'application/json');
      customHeaders.set('Accept-Language', 'hr');
      return customHeaders;
    }

    return headers;
  }
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, store, extraOptions) => {
  let result = await baseQuery(args, store, extraOptions);
  const { getParsedItem: getSessionStorageItem, setItem } = useStorage();

  const refreshToken = getSessionStorageItem(StorageKeys.REFRESH_TOKEN);

  if (result.error && result.error.originalStatus === 401) {
    if (!refreshToken) return result;
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh-token',
        method: 'POST',
        body: { refreshToken } // Include the refresh token in the request body
      },
      store,
      extraOptions
    );

    if (refreshResult.data) {
      setItem(StorageKeys.ACCESS_TOKEN, refreshResult.data.accessToken);
      result = await baseQuery(args, store, extraOptions);
    } else {
      // If the refresh fails, log out the user
      //window.location.href = '/login';
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth, // Use the re-auth base query
  tagTypes: [PRODUCT_TAG, CLIENT_TAG],
  endpoints: () => ({})
});
