import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authSlice from './auth/auth-slice';
import {booksSlice} from './books/booksSlice'; //Auzthorization reducer

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(booksSlice.middleware),
];

//Configuration for persistor
const booksPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(booksPersistConfig, authSlice),
        [booksSlice.reducerPath]: booksSlice.reducer,
    },
    middleware,
});

export const persistor = persistStore(store);
