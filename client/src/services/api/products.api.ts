import { httpServiceDefault } from './api';
import { ApiRoute } from '../../constants';
import { MainPageData } from '../../pages/MainPage/MainPage.type';
import { QueryParams, ProductsResponse } from './api.type';
import { ProductDataType } from '../../types/ProductData.type';

const productsApi = {
    products: async (params: QueryParams): Promise<ProductsResponse> => {
        const { data } = await httpServiceDefault.get(ApiRoute.Products, {
            params
        });
        return data;
    },
    mainPageData: async (): Promise<MainPageData> => {
        const { data } = await httpServiceDefault.get(ApiRoute.MainPage);
        return data;
    },
    productById: async (_id: string): Promise<ProductDataType> => {
        const { data } = await httpServiceDefault.get(ApiRoute.ProductId, {
            params: {
                _id
            }
        });
        return data;
    },
    recommend: async (gender: string): Promise<ProductDataType[]> => {
        const { data } = await httpServiceDefault.get(ApiRoute.Recommend, {
            params: {
                gender
            }
        });
        return data;
    }
};

export { productsApi };
