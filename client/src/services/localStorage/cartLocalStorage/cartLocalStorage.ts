import { KeyNameCart } from '../../../constants';
const setCartData = (cartData: string): void => {
    const storageCartData = getCartData();
    if (storageCartData) {
        const normalizedCartData = JSON.parse(storageCartData);
        normalizedCartData.push(cartData);
        localStorage.setItem(KeyNameCart.Cart, JSON.stringify(normalizedCartData));
    } else {
        localStorage.setItem(KeyNameCart.Cart, JSON.stringify([cartData]));
    }
};

const getCartData = (): string | null => localStorage.getItem(KeyNameCart.Cart);

const updateData = (data: string[]): void => localStorage.setItem(KeyNameCart.Cart, JSON.stringify(data));

export const cartLocalStorage = {
    setCartData,
    getCartData,
    updateData
};
