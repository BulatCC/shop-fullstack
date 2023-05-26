import { ProductDataType } from '../../types/ProductData.type';

export interface CartProduct {
    selectedData: {
        color: string;
        size: string;
    };
    productData: ProductDataType;
}

export interface InitialAppState {
    authorizationStatus: string;
    cart: CartProduct[];
}

export interface AppState {
    appState: InitialAppState;
}
