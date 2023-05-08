import { ProductCard } from '../../../types/ProductCard';

export interface ProductListProps {
    products?: ProductCard[] | null;
    skeletonNumber: number;
    classMod?: string;
    isCatalog?: boolean;
};
