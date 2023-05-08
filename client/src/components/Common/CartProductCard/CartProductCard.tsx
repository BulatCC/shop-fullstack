import { Link } from 'react-router-dom';
import { CartProductCardProps } from './CartProductCard.type';
import { Img } from '../Img/Img';
import style from './CartProductCard.module.scss';

const CartProductCard = ({ id, name, img, link, color, size, price }: CartProductCardProps): JSX.Element => {
    return (
        <article className={style['cart-product-card']}>
            <Link to={link}>
                <Img imgPath={img} altText={name} className={style['cart-product-card_img']} />
            </Link>
            <div className={style['cart-product-card_description']}>
                <Link to={link} className={style['cart-product-card_title']}>
                    {name}
                </Link>
                <span className={style['cart-product-card_text']}>Color: {color}</span>
                <span className={style['cart-product-card_text']}>Size: {size}</span>
                <span className={style['cart-product-card_price']}>$ {price}</span>
            </div>
            <button className={`${style['cart-product-card_button']} close-button`}>удалить</button>
        </article>
    );
};

export { CartProductCard };
