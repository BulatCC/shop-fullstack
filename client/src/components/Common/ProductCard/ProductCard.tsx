import { Link } from 'react-router-dom';
import { ProductCardProps } from './ProductCard.type';
import style from './ProductCard.module.scss';

const ProductCard = ({ productCardData: { id, img, title, price, gender, productType }, isBig, isCatalog }: ProductCardProps): JSX.Element => {
    const route = `/${gender}/${productType}/${id}`;
    return (
        <article className={
            `${isBig ? style['product-card--big'] : ''} ${isCatalog ? style['product-card--catalog'] : ''}`
        }>
            <Link to={route}>
                <div className={`${style['product-card_img-wrap']}`}>
                    <img src={img} className={style['product-card_img']} alt={title} />
                </div>
                <h3 className={`${style['product-card_title']}` }>{title}</h3>
                <br />
                <span className={`${style['product-card_price']}`}>$ {price}</span>
            </Link>
        </article>
    );
};

export { ProductCard };
