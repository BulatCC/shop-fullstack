import { ProductDataType } from '../../../types/ProductData.type';

export interface ProductCardProps {
    productCardData: ProductDataType;
    isBig?: boolean | string;
    isCatalog?: boolean;
}
export interface ProductCardSkeletonProps {
    isBig?: boolean | string;
    isCatalog?: boolean;
}
