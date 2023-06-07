import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAuthManager = createAsyncThunk('authManager/fetchAuthManager', async(params)=>{
    const { data } = await axios.post('/auth/login_manager', params);
    return data;
});

export const fetchAuthMeManager = createAsyncThunk('authManager/fetchAuthMeManager', async(params)=>{
    const { data } = await axios.get('/auth/me_manager');
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const authManagerSlice = createSlice({
    name: 'authManager',
    initialState,
    reducers: {
        logoutManager: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAuthManager.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthManager.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
            console.log(state.data);
        },
        [fetchAuthManager.rejected]: (state) => {
            state.status = 'error';
            state.data = null;;
        },
        [fetchAuthMeManager.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthMeManager.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
            console.log(state.data);

        },
        [fetchAuthMeManager.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
    }
});

export const selectIsAuthManager =(state) => Boolean(state.auth.data);

export const authManagerReducer = authManagerSlice.reducer;

export const {logoutManager} = authManagerSlice.actions;