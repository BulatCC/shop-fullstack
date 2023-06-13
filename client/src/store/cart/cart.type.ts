import { ProductDataType } from '../../types/ProductData.type';

export interface CartProduct {
    selectedData: {
        color: string;
        size: string;
    };
    productData: ProductDataType;
}

export interface InitialCartState {
    cart: CartProduct[];
}

export interface CartState {
    cart: InitialCartState;
}
