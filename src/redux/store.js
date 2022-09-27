import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import contactsReducer from './contacts/contactsReducer';
// import authReducer from './auth/authSlice';
// import {  FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   persistStore,
// persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";

// const middleware = [...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//     },
//   })]

//   const authPersistConfig = {
//     key: 'auth',
//    storage,
//     whitelist: ['token'],
//   }

function todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.text])
      default:
        return state
    }
  }
  

export const store = configureStore({
    reducer: todos,
})
    // reducer: {
    //   // auth: authReducer,
    //   auth: persistReducer(authPersistConfig, authReducer),
    //   contacts: contactsReducer,
    // },
    // middleware,
    // devTools: process.env.NODE_ENV !== 'production',  
// })


// export const persistor = persistStore(store);