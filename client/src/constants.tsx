export const AppRoute = {
    Root: '/',
    NotFound: '*',
    Login: 'login',
    Catalog: 'catalog',
    CatalogGender: ':gender',
    ProductType: ':productType',
    Product: 'product',
    ProductId: ':productId',
    Cart: 'cart',
    AdminPanel: 'admin-panel',
    Add: 'add',
    EditProduct: ':editProductId'
};

export const SortType = {
    Popular: 'Popular',
    LowToHigh: 'Low to high',
    HighToLow: 'High to low'
};

export const ClothsGender = {
    Woman: 'woman',
    Man: 'man'
};

export const Collection = {
    Casual: 'casual',
    Classic: 'classic'
};

export const AuthorizationStatus = {
    Auth: 'Auth',
    NoAuth: 'NoAuth',
    Unknown: 'Unknown'
};

export const KeyName = {
    Cart: 'Cart'
};

// eslint-disable-next-line
export const EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// eslint-disable-next-line
export const All_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
