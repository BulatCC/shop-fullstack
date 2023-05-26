import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialAppState, AppState, CartProduct } from './AppState.type';
import { AuthorizationStatus } from '../../constants';

const initialState: InitialAppState = {
    authorizationStatus: AuthorizationStatus.Auth,
    cart: []
};

const AppStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setAuthorizationStatus: (state, action) => {
            state.authorizationStatus = action.payload;
        },
        addProductCart: (state, action: PayloadAction<CartProduct>) => {
            state.cart.push(action.payload);
        },
        deleteProductCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((_, i) => i !== action.payload);
        }
    }
});

export const { reducer, actions } = AppStateSlice;
export const {
    setAuthorizationStatus,
    addProductCart,
    deleteProductCart
} = actions;
export const getCart = () => (state: AppState): CartProduct[] | [] => state.appState.cart;
export const getAuthorizationStatus = () => (state: AppState): string => state.appState.authorizationStatus;
