export const AppRoute = {
    Root: '/',
    NotFound: '*',
    Login: 'login',
    Register: 'register',
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
    Popular: {
        title: 'Popular',
        value: ''
    },
    LowToHigh: {
        title: 'Low to high',
        value: 1
    },
    HighToLow: {
        title: 'High to low',
        value: -1
    }
};

export const ClothsGender = {
    Woman: 'woman',
    Man: 'man'
};

export const Collection = {
    Casual: 'casual',
    Classic: 'classic'
};

export const ProductType = {
    Jeans: {
        title: 'Jeans',
        value: 'jeans'
    },
    Jacket: {
        title: 'Jackets',
        value: 'jackets'
    },
    Shirt: {
        title: 'Shirts',
        value: 'shirts'
    }
};

export const AuthorizationStatus = {
    Auth: 'Auth',
    NoAuth: 'NoAuth',
    Unknown: 'Unknown'
};

export const KeyNameCart = {
    Cart: 'Cart'
};

// eslint-disable-next-line
export const EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// eslint-disable-next-line
export const All_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

export const ApiRoute = {
    SingUp: '/auth/singUp',
    SingInWithPassword: '/auth/singIn',
    Token: '/auth/refreshToken',
    MainPage: '/products/main',
    Products: '/products/',
    ProductId: '/products/id',
    Recommend: '/products/recommend'
};

export const KeyNameAuth = {
    TokenKey: 'jwt-token',
    RefreshKey: 'jwt-refresh-token',
    ExpiresKey: 'jwt-expires',
    UserIdKey: 'user-id'
};
