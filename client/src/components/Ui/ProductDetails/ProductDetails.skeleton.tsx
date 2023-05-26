import style from './ProductDetails.module.scss';

const ProductDetailsSkeleton = (): JSX.Element => {
    return (
        <div className={`${style['product-details_description']} ${style['product-details_description--skeleton']} skeleton`}/>
    );
};

export { ProductDetailsSkeleton };
