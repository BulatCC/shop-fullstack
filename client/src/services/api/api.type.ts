import { AxiosRequestHeaders } from 'axios/index';
import { ProductDataType } from '../../types/ProductData.type';

export interface AuthUser {
    email: string;
    password: string;
}

export interface RegisterUser extends AuthUser {
    name: string;
}

export interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
    Authorization: string;
}

export interface QueryParams {
    sortBy: string;
    sliceIndexStart: number;
    loadLimit: number;
    queryParams: {
        gender: string;
        productType?: string;
    };
}

export interface ProductsResponse {
    products: ProductDataType[];
    productsAmount: number;
}
