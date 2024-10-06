import { baseApi } from 'shared/api';
import { LoginResponse, RequestLoginBody, User } from 'entities/auth';
import { Tokens } from '../model/types.ts';
import { StorageKeys } from 'shared/lib';

const tokenData = sessionStorage.getItem(StorageKeys.ACCESS_TOKEN);
const accessToken = tokenData ? JSON.parse(tokenData) : null; // Parse if stored as JSON
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, RequestLoginBody>({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body
      })
    }),

    me: build.query<User, string>({
      query: () => ({
        url: `/auth/me`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
    }),

    refresh: build.mutation<Tokens, { refreshToken: string }>({
      query: (body) => ({
        url: '/auth/refresh-token',
        method: 'POST',
        body
      })
    })
  }),
  overrideExisting: false
});

export const { useLoginMutation, useMeQuery, useRefreshMutation } = authApi;
