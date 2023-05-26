import { SortType } from '../../../constants';
import { db } from './mockData';
import { ProductDataType } from '../../../types/ProductData.type';

export const getProductsData = async (params: Record<string, any>): Promise<any> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            const productsData = db.filter(item => item.gender === params.gender);
            if (params.sortBy === SortType.HighToLow) {
                productsData.sort((a, b) => Number(b.price) - Number(a.price));
            }
            if (params.sortBy === SortType.LowToHigh) {
                productsData.sort((a, b) => Number(a.price) - Number(b.price));
            }
            const productsAmount = productsData.length;
            const productCrop = productsData.slice(params.sliceIndexStart, params.sliceIndexEnd);

            resolve({ productCrop, productsAmount });
        }, 500);
    })
);

export const getAllData = async (params: Record<string, any>): Promise<any> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            const productCrop = db.slice(params.sliceIndexStart, params.sliceIndexEnd);
            const productsAmount = db.length;
            resolve({ productCrop, productsAmount });
        }, 1);
    })
);

export const getMainPageData = async (): Promise<any> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            const PRODUCTS_LIMIT = 4;
            const bestsellers = db.filter(item => item.bestSeller)
                .slice(0, PRODUCTS_LIMIT);
            const jeans = db.filter(item => item.productType === 'jeans')
                .slice(0, PRODUCTS_LIMIT);
            const jackets = db.filter(item => item.productType === 'jacket')
                .slice(0, PRODUCTS_LIMIT);
            const shirts = db.filter(item => item.productType === 'shirt')
                .slice(0, PRODUCTS_LIMIT);
            const products = [
                {
                    bestsellers
                },
                {
                    jeans
                },
                {
                    jackets
                },
                {
                    shirts
                }
            ];
            resolve(products);
        }, 500);
    })
);

export const getProductById = async (id: string): Promise<any> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            const product = db.find(item => item.id === id);
            resolve(product as ProductDataType);
        }, 500);
    })
);

export const getRecommendData = async (): Promise<unknown> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(db.slice(0, 4));
        }, 500);
    })
);
