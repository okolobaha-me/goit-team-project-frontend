import axios from 'axios';
import { token } from './token';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../API';

axios.defaults.baseURL = baseUrl;

export const signUp = createAsyncThunk(
    'auth/signup',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const googleSignUp = createAsyncThunk(
    'auth/google',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/auth/google');
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signIn = createAsyncThunk(
    'auth/signin',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/signin', credentials);
            token.set(data.data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signout',
    async (credentials, { rejectWithValue }) => {
        try {
            await axios.get(`/auth/signout?_id=${credentials}`);
            token.unset();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const refresh = createAsyncThunk(
    'user/refresh',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/user/', credentials);
            token.set(data.data.user.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
