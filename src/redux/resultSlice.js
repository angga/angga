import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getResult = createAsyncThunk("result", async () => {
    const res = await axios.get(
        "http://localhost:5000/v1/butir/all"
    );
    return res.data;
})

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
    }
});


export default resultSlice.reducer;