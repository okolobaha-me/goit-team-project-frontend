import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import {googleSignUp, signIn, signOut, signUp} from './auth-operations';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isLoading: false,
};

const user = createReducer(initialState, {
    [signUp.fulfilled]: (_, { payload }) => {
        return payload.user;
    },
    [signIn.fulfilled]: (_, { payload }) => {
        return payload.token;
    },
    [googleSignUp.fulfilled]: (_, { payload }) => payload.token,
});

const token = createReducer(null, {
    [signUp.fulfilled]: (_, { payload }) => {
        console.log(payload.token);
        return payload.token;
    },
    [signIn.fulfilled]: (_, { payload }) => payload.token,
    [signOut.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
    [signUp.fulfilled]: () => true,
    [signIn.fulfilled]: () => true,
    [signOut.fulfilled]: () => false,
});

export const authReducer = combineReducers({
    user,
    token,
    isLoggedIn,
});
