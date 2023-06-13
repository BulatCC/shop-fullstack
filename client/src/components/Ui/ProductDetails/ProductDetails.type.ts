import { ProductDataType } from '../../../types/ProductData.type';

export interface ProductDetailsComponentProps {
    colorTitle: string;
    sizeTitle: string;
    data: ProductDataType;
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
    data: ProductDataType | null;
};

export interface SizeType {
    title: string;
    value: string;
};
