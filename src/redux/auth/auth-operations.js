import axios from 'axios';
import { token } from './token';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://books-reading-goit.herokuapp.com/';

export const signUp = createAsyncThunk(
    'auth/signup',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/signup', credentials);
            token.set(null);
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
            token.set(data.token);
            console.log('Successfully logged in');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.get('/auth/signout');
            token.unset();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
