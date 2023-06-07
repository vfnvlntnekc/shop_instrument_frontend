import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchInstrument = createAsyncThunk('instrument/fetchInstrument', async () => {
    const { data } = await axios.get('/instrument');
    return data;
});

export const fetchTags = createAsyncThunk('instrument/fetchTags', async () => {
    const { data } = await axios.get('/tags');
    return data;
});

const initialState = {
    instrument: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    },
};

const instrumentSlice = createSlice({
    name: 'instrument',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchInstrument.pending]: (state) => {
            state.instrument.items = [];
            state.instrument.status = 'loading';
        },
        [fetchInstrument.fulfilled]: (state, action) => {
            state.instrument.items = action.payload;
            state.instrument.status = 'loaded';
        },
        [fetchInstrument.rejected]: (state) => {
            state.instrument.items = [];
            state.instrument.status = 'error';
        },
    },
});

export const instrumentReducer = instrumentSlice.reducer;