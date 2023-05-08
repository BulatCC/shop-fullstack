import { ProductCard } from '../../../../types/ProductCard';

export interface ProductCardProps {
    productCardData: ProductCard;
    isBig?: boolean | string;
    isCatalog?: boolean;
};
