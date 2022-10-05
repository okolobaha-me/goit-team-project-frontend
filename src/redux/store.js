import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authSlice from './auth/auth-slice'; //Auzthorization reducer

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

//Configuration for persistor
const contactsPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(contactsPersistConfig, authSlice),
    },
    middleware,
});

export const persistor = persistStore(store);
