import { RefObject } from 'react';
import { ProductDataType } from '../../../types/ProductData.type';

export interface ProductListProps {
    products?: ProductDataType[] | null;
    skeletonNumber: number;
    classMod?: string;
    isCatalog?: boolean;
    ref?: RefObject<HTMLUListElement>;
}
