import { ProductDataType } from '../../../types/ProductData.type';

export interface ProductsPreviewListProps {
    products?: ProductDataType[] | null;
    title: string;
    link: string;
}
