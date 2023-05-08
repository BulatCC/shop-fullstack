import { ProductCardSkeletonProps } from './ProductCardSkeleton.type';
import style from '../ProductCard.module.scss';

const ProductCardSkeleton = ({ isBig, isCatalog }: ProductCardSkeletonProps): JSX.Element => {
    return (
        <article className={
            `${isBig ? style['product-card--big'] : ''} ${isCatalog ? style['product-card--catalog'] : ''}`
        }>
            <div>
                <div className={`${style['product-card_img-wrap']} ${style['skeleton']} skeleton`}>
                </div>
                <h3 className={`${style['product-card_title']} ${style['skeleton']} skeleton` }></h3>
                <br />
                <span className={`${style['product-card_price']} ${style['skeleton']} skeleton`}></span>
            </div>
        </article>
    );
};

export { ProductCardSkeleton };
