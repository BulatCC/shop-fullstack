import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductsPreviewList } from '../../components/Ui/ProductsPreviewList/ProductsPreviewList';
import { Total } from '../../components/Ui/Total/Total';
import { CartProductCard } from '../../components/Common/CartProductCard/CartProductCard';
import style from './Cart.module.scss';
import { AppRoute } from '../../Consts';
import { API } from '../../services/api';
import { ProductCard } from '../../types/ProductCard';

const Cart = (): JSX.Element => {
    const [recommendData, setRecommendData] = useState<ProductCard[] | null>(null);
    useEffect(() => {
        API.getRecommendData()
            .then(data => setRecommendData(data as ProductCard[]))
            .catch(error => console.log(error));
    }, []);

    const cardsData = [
        {
            id: '1',
            img: '/img/woman-jacket-1',
            name: 'Jacket',
            link: '/catalog/13',
            color: 'white',
            size: 'S',
            price: '20'
        },
        {
            id: '2',
            img: '/img/woman-jacket-2',
            name: 'Jacket',
            link: '/catalog/13',
            color: 'white',
            size: 'S',
            price: '20'
        },
        {
            id: '3',
            img: '/img/woman-jacket-3',
            name: 'Jacket',
            link: '/catalog/13',
            color: 'white',
            size: 'S',
            price: '20'
        }
    ];

    if (!cardsData.length) {
        return (
            <>
                <section className="content">
                    <div className={`${style.cart_empty}`}>
                        <div className={`${style['cart_empty-container']} container`}>
                            <div className={style['cart_empty-wrapper']}>
                                <h1 className="title">Cart is empty</h1>
                                <Link to={AppRoute.Catalog} className={`${style['cart_empty-button']} button`}>Go to catalog</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <ProductsPreviewList title='You may also like' link={'#'} products={recommendData} />
            </>
        );
    }

    return (
        <>
            <section className={`${style.cart} content`}>
                <div className="container">
                    <div className="title-container">
                        <h1 className="title">Cart</h1>
                    </div>
                    <div className={style.cart_container}>
                        <div>
                            {cardsData.map(({ id, img, name, link, color, size, price }) => (
                                <CartProductCard
                                    id={id}
                                    img={img}
                                    name={name}
                                    link={link}
                                    color={color}
                                    size={size}
                                    price={price}
                                    key={id}
                                />
                            ))}
                        </div>
                        <Total price={120} classMod={style.cart_amount} />
                    </div>
                </div>
            </section>
            <ProductsPreviewList title='You may also like' link={'#'} products={recommendData} />
        </>
    );
};

export { Cart };
