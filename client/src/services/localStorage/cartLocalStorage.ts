import { KeyName } from '../../constants';
const setCartData = (cartData: string): void => {
    const storageCartData = getCartData();
    if (storageCartData) {
        const normalizedCartData: any[] = JSON.parse(storageCartData);
        normalizedCartData.push(cartData);
        localStorage.setItem(KeyName.Cart, JSON.stringify(normalizedCartData));
    } else {
        localStorage.setItem(KeyName.Cart, JSON.stringify([cartData]));
    }
};

const getCartData = (): string | null => localStorage.getItem(KeyName.Cart);

const updateData = (data: string[]): void => localStorage.setItem(KeyName.Cart, JSON.stringify(data));

export const cartLocalStorage = {
    setCartData,
    getCartData,
    updateData
};
