import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/v1/butir/"

export const getAll = createAsyncThunk("result", async () => {
    const res = await axios.get(
        url + "all"
    );
    return res.data;
})

export const getResult = createAsyncThunk("result", async (keyword) => {
    const res = await axios.get(
        url + "search/" + keyword
    );
    return res.data;
})

export const getDetail = createAsyncThunk("result", async (id) => {
    const res = await axios.get(
        url + id
    );
    return res.data;
})
