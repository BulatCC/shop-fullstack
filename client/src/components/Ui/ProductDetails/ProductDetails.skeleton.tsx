import style from './ProductDetails.module.scss';
import cn from 'classnames';

const ProductDetailsSkeleton = (): JSX.Element => {
    return (
        <div className={cn(style['product-details_description'], style['product-details_description--skeleton'], 'skeleton')}/>
    );
};

export { ProductDetailsSkeleton };
