import { ProductCard } from '../../../types/ProductCard';

export interface ProductsPreviewListProps {
    products?: ProductCard[] | null;
    title: string;
    link: string;
    anchor?: string;
}
