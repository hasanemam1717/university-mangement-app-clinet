import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./fetures/auth/authSlice";
import { baseApi } from "./api/baseApi";
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "auth",
    storage: storage
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthReducer
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares({
        serializableCheck: {
            ignoredActions: [FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,]
        }
    }).concat(baseApi.middleware)
})

export const persister = persistStore(store)

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store