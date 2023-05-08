import { createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';
import { Catalog } from './pages/Catalog/Catalog';
import { Product } from './pages/Product/Product';
import { Cart } from './pages/Cart/Cart';
import { Layout } from './components/Layout';
import { AppRoute } from './Consts';

export const appRouter = createBrowserRouter([
    {
        path: AppRoute.Root,
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Main />
            },
            {
                path: AppRoute.Catalog,
                children: [
                    {
                        path: '',
                        element: <Catalog />
                    },
                    {
                        path: AppRoute.ProductId,
                        element: <Product />
                    },
                    {
                        path: AppRoute.CatalogWoman,
                        element: <Catalog />
                    },
                    {
                        path: AppRoute.CatalogMan,
                        element: <Catalog />
                    }
                ]
            },
            {
                path: AppRoute.Login,
                element: <Login />
            },
            {
                path: AppRoute.Cart,
                element: <Cart />
            }
        ]
    }
]);
