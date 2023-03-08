import { configureStore } from "@reduxjs/toolkit";
import users from './slices/users';
import categories from "./slices/categories";

export const store =  configureStore({
    reducer: {
        users,
        categories,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch