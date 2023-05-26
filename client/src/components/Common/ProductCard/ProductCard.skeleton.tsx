import { ProductCardSkeletonProps } from './ProductCard.type';
import style from './ProductCard.module.scss';

const ProductCardSkeleton = ({ isBig, isCatalog }: ProductCardSkeletonProps): JSX.Element => {
    return (
        <article className={
            `${isBig ? style['product-card--big'] : ''} ${isCatalog ? style['product-card--catalog'] : ''}`
        }>
            <div>
                <div className={`${style['product-card_img-wrap']} skeleton`}/>
                <h3 className={`${style['product-card_title']} skeleton` }/>
                <br />
                <span className={`${style['product-card_price']} skeleton`}/>
            </div>
        </article>
    );
};

export { ProductCardSkeleton };
