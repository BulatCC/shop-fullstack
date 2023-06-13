import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cart';
import { authReducer } from './auth/auth';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
