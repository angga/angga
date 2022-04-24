import { createSlice } from '@reduxjs/toolkit';

import { getAll, getDetail, getResult } from '../api/resultApi';

export const resultSlice = createSlice({
    name: "result",
    initialState: {
        result: [],
        pending: false,
        error: false
    },
    reducers: {
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.pending = true;
            state.error = false;
        },
        [getAll.fulfilled]: (state, action) => {
            state.pending = false;
            state.error = false;
            state.result = action.payload;
        },
        [getAll.rejected]: (state, action) => {
            state.pending = false;
            state.error = true;
        },
        [getResult.pending]: (state, action) => {
            state.pending = true;
            state.error = false;
        },
        [getResult.fulfilled]: (state, action) => {
            state.pending = false;
            state.error = false;
            state.result = action.payload;
        },
        [getResult.rejected]: (state, action) => {
            state.pending = false;
            state.error = true;
        },
        [getDetail.pending]: (state, action) => {
            state.pending = true;
            state.error = false;
        },
        [getDetail.fulfilled]: (state, action) => {
            state.pending = false;
            state.error = false;
            state.result = action.payload;
        },
        [getDetail.rejected]: (state, action) => {
            state.pending = false;
            state.error = true;
        },
    },
});


export default resultSlice.reducer;