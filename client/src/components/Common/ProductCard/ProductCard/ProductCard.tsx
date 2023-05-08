import { Link } from 'react-router-dom';
import { ProductCardProps } from './ProductCard.types';
import { Img } from '../../Img/Img';
import { AppRoute } from '../../../../Consts';
import style from '../ProductCard.module.scss';

const ProductCard = ({ productCardData: { link, img, title, price }, isBig, isCatalog }: ProductCardProps): JSX.Element => {
    const route = `/${AppRoute.Catalog}/${link}`;
    return (
        <article className={
            `${isBig ? style['product-card--big'] : ''} ${isCatalog ? style['product-card--catalog'] : ''}`
        }>
            <Link to={route}>
                <div className={`${style['product-card_img-wrap']}`}>
                    <Img imgPath={img} className={style['product-card_img']} altText={title} />
                </div>
                <h3 className={`${style['product-card_title']}` }>{title}</h3>
                <br />
                <span className={`${style['product-card_price']}`}>$ {price}</span>
            </Link>
        </article>
    );
};

export { ProductCard };
