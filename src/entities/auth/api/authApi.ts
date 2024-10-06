import {baseApi} from "shared/api";
import {LoginResponse, RequestLoginBody, User} from "entities/auth";
import {Tokens} from "../model/types.ts";

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
                url: `/me`,
                method: 'GET'
            })
        }),

        refresh: build.mutation<Tokens, { refreshToken: string }>({
            query: (body) => ({
                url: '/refresh-token',
                method: 'POST',
                body
            })
        })
    }),
    overrideExisting: false
});

export const { useLoginMutation, useMeQuery, useRefreshMutation } = authApi;