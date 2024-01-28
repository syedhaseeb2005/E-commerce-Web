import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cartReduxSlice";
import userSlice from "../userSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    cart: cartSlice,
    user: userSlice
})

const persistConfig = { key: 'root', version: 1, storage }
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
