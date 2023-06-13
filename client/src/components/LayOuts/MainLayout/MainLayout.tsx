import { Outlet } from 'react-router-dom';
import { Header } from '../../Ui/Header/Header';
import { Footer } from '../../Ui/Footer/Footer';
import { useScrollTop } from '../../../hooks/useScrollTop';
import { useAppDispatch } from '../../../store/reduxHooks';
import { useEffect } from 'react';
import { cartLocalStorage } from '../../../services/localStorage/cartLocalStorage/cartLocalStorage';
import { addProductCart } from '../../../store/cart/cart';

const MainLayout = (): JSX.Element => {
    useScrollTop();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const cartData = cartLocalStorage.getCartData();
        if (cartData) {
            JSON.parse(cartData).forEach((cartItem: string) => {
                const cartProduct = JSON.parse(cartItem);
                dispatch(addProductCart(cartProduct));
            });
        }
    }, []);
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export { MainLayout };
