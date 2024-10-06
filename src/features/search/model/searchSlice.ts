import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: "",
}

/**
 * A slice for global search state management.
 */
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        /**
         * Change the state of the search.
         * @param state - The current state of the slice.
         * @param payload
         */
        handleValue: (state, payload) => {
            state.searchValue = payload.payload
        },
    },
})

export const {
    handleValue,
} = searchSlice.actions

export const searchReducer = searchSlice.reducer
