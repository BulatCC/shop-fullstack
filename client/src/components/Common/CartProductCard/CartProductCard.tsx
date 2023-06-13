import { Link } from 'react-router-dom';
import { CartProductCardProps } from './CartProductCard.type';
import { ColorCircle } from '../ColorCircle/ColorCircle';
import style from './CartProductCard.module.scss';

const CartProductCard = ({ data: { _id, gender, productType, img, title, price }, color, size, handleDelete, index }: CartProductCardProps): JSX.Element => {
    const route = `/${gender}/${productType}/${_id}`;
    return (
        <article className={style['cart-product-card']}>
            <Link to={route}>
                <img src={img} alt={title} className={style['cart-product-card_img']} />
            </Link>
            <div className={style['cart-product-card_description']}>
                <Link to={route} className={style['cart-product-card_title']}>
                    {title}
                </Link>
                <span className={`
                    ${style['cart-product-card_text']}
                    ${style['cart-product-card_text--color']}
                `}
                >Color: <ColorCircle color={color}/>
                </span>
                <span className={style['cart-product-card_text']}>Size: {size}</span>
                <span className={style['cart-product-card_price']}>$ {price}</span>
            </div>
            <button onClick={() => handleDelete(index)} className={`${style['cart-product-card_button']} close-button`}>удалить</button>
        </article>
    );
};

export { CartProductCard };
