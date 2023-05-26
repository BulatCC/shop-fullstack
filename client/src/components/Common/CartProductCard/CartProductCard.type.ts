import { ProductDataType } from '../../../types/ProductData.type';

export interface CartProductCardProps {
    data: ProductDataType;
    size: string;
    color: string;
    index: number;
    handleDelete: (index: number) => void;
}
