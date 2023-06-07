import { configureStore } from '@reduxjs/toolkit';
import { instrumentReducer } from './slices/instrument';
import { authReducer } from './slices/auth';
import { authManagerReducer } from './slices/authManager';


const store = configureStore({
    reducer: {
        instrument: instrumentReducer,
        auth: authReducer,
        authManager: authManagerReducer,
    }
});

export default store;