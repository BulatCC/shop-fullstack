import { Link } from 'react-router-dom';
import { Recommend } from '../../components/Ui/Recommend/Recommend';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { Total } from '../../components/Ui/Total/Total';
import { CartProductCard } from '../../components/Common/CartProductCard/CartProductCard';
import style from './CartPage.module.scss';
import { ClothsGender } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../store/reduxHooks';
import { getCart, deleteProductCart } from '../../store/cart/cart';
import { cartLocalStorage } from '../../services/localStorage/cartLocalStorage/cartLocalStorage';
import { CartProduct } from '../../store/cart/cart.type';

const CartPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector(getCart());
    const handleProductDelete = (index: number): void => {
        const cartLocalStorageData = cartLocalStorage.getCartData();
        dispatch(deleteProductCart(index));
        if (cartLocalStorageData) {
            const newCartLocalStorageData: string[] = JSON.parse(cartLocalStorageData).filter((_: string, i: number) => i !== index);
            cartLocalStorage.updateData(newCartLocalStorageData);
        }
    };

    const getTotalPrice = (cartData: CartProduct[]): number => {
        return cartData.reduce((acc: number, item: CartProduct): number => {
            acc += Number(item.productData.price);
            return acc;
        }, 0);
    };

    return (
        <>
            <div className="container">
                <BreadCrumbs/>
            </div>

            {!cartProducts.length && <section className="content">
                <div className={`${style.cart_empty}`}>
                    <div className={`${style['cart_empty-container']} container`}>
                        <div className={style['cart_empty-wrapper']}>
                            <h1 className="title">Cart is empty</h1>
                            <Link to={`/${ClothsGender.Woman}`} className={`${style['cart_empty-button']} button`}>Go to catalog</Link>
                        </div>
                    </div>
                </div>
            </section>}
            {cartProducts.length && <section className={`${style.cart} content`}>
                <div className="container">
                    <div className="title-container">
                        <h1 className="title">Cart</h1>
                    </div>
                    <div className={style.cart_container}>
                        <div>
                            {cartProducts.map(({
                                selectedData: { size, color },
                                productData
                            }, i) => (
                                <CartProductCard
                                    data={productData}
                                    size={size}
                                    color={color}
                                    index={i}
                                    handleDelete={handleProductDelete}
                                    key={`${productData._id}${i.toString()}`}
                                />
                            ))}
                        </div>
                        <Total price={getTotalPrice(cartProducts)} classMod={style.cart_amount} />
                    </div>
                </div>
            </section>}
            <Recommend/>
        </>
    );
};

export { CartPage };
