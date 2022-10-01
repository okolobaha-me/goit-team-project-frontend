import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, signOut } from './auth-operations';

const initialState = {
    user: { name: '', email: '', books: [], planning: {} },
    token: null,
    isLoggedIn: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [signUp.rejected](state) {
            state.isLoading = false;
        },

        [signIn.pending]: state => {
            state.isLoading = true;
        },
        [signIn.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [signIn.rejected](state) {
            state.isLoading = false;
        },

        [signOut.pending]: state => {
            state.isLoading = true;
        },
        [signOut.fulfilled](state) {
            state.user = { name: '', email: '' };
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        [signOut.rejected](state) {
            state.isLoading = false;
        },
    },
});
export default authSlice.reducer;
