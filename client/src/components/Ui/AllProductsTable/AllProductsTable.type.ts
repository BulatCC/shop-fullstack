import { ProductDataType } from '../../../types/ProductData.type';
export interface AllProductsTableProps {
    data: ProductDataType[];
}

export interface productInfo {
    color: string;
    images: string[];
    size: Record<string, string>;
}
