import { createSlice } from '@reduxjs/toolkit';
import {authApi, Tokens, User} from 'entities/auth';
import { useStorage, StorageKeys } from 'shared/lib';

interface SessionState {
    user: User | {}
}

const initialState: SessionState = {
    user: {}
};

const { setItem, removeItem } = useStorage();
const { setItem: setLocalItem, removeItem: removeLocalItem } = useStorage(true);

// Helper functions for setting and removing storage items
const clearSessionStorage = () => {
    removeItem(StorageKeys.ACCESS_TOKEN);
    removeItem(StorageKeys.REFRESH_TOKEN);
};

const setTokens = (payload: Tokens) => {
    setItem(StorageKeys.ACCESS_TOKEN, payload.accessToken);
    setItem(StorageKeys.REFRESH_TOKEN, payload.refreshToken);
};

// const setUser = (payload: User, isRemember: boolean) => {
//     if (isRemember) {
//         setLocalItem(StorageKeys.USER, payload.userInfo);
//     }
//     setItem(StorageKeys.USER, payload.userInfo);
// };

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        logout: (state) => {
            // Clear state and session/local storage
            state.isAuthenticated = false;
            state.token = '';

            clearSessionStorage();

            // Redirect to login page
            window.location.href = '/login';
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints?.login.matchFulfilled, (state, { payload }) => {
            setTokens(payload);
        });

        builder.addMatcher(authApi.endpoints?.me.matchFulfilled, (state, { payload }) => {
            state.user =  payload;
        });

        builder.addMatcher(authApi.endpoints?.refresh.matchFulfilled, (state, { payload }) => {
            setTokens(payload);
        });
    }
});

export const { logout } = sessionSlice.actions;
export const authReducer = sessionSlice.reducer;
