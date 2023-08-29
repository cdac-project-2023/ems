import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './Features/authSlice'
import userReducer from './Features/userSlice'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import authSlice from './Features/authSlice';

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({ user: userReducer, auth: authReducer,});

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// create a new store
export const store = configureStore({
  reducer:{
  auth : authSlice,
  // reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
      // serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
// });
// export const persistor = persistStore(store)