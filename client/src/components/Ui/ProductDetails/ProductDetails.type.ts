import { ColorsDataType } from '../../../types/ProductData.type';

export interface ProductDetailsData {
    title: string;
    description: string;
    colors: ColorsDataType[];
    price: string;
}

export interface ProductDetailsComponentProps {
    colorTitle: string;
    sizeTitle: string;
    data: ProductDetailsData;
    selected: {
        color: string;
        size: string;
    };
    handleChoice: (data: {
        color: string;
        size: string;
    }) => void;
    handleAddToCart: () => void;
}

export type ProductDetailsProps = Omit<ProductDetailsComponentProps, 'data'> & {
    data: ProductDetailsData | null;
};
