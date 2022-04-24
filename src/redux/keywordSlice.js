import { createSlice } from '@reduxjs/toolkit';

export const keywordSlice = createSlice({
    name: "keyword",
    initialState: {
        keyword: "",
        pending: false,
        error: false
    },
    reducers: {
        update: (state, action) => {
            state.keyword = action.payload.keyword;
        }
    },
});


export const { update } = keywordSlice.actions;
export default keywordSlice.reducer;