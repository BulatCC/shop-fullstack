import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialCartState, CartState, CartProduct } from './cart.type';

const initialState: InitialCartState = {
    cart: []
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductCart: (state, action: PayloadAction<CartProduct>) => {
            state.cart.push(action.payload);
        },
        deleteProductCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((_, i) => i !== action.payload);
        }
    }
});

export const { reducer: cartReducer, actions } = CartSlice;
export const {
    addProductCart,
    deleteProductCart
} = actions;
export const getCart = () => (state: CartState): CartProduct[] | [] => state.cart.cart;
