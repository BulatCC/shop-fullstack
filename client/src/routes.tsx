import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/LayOuts/MainLayout/MainLayout';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MainPage } from './pages/MainPage/MainPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CartPage } from './pages/CartPage/CartPage';
import { AdminPanelPage } from './pages/AdminPanelPage/AdminPanelPage';
import { PrivateRoute } from './components/Ui/PrivateRoute/PrivateRoute';
import { EditProductPage } from './pages/EditProductPage/EditProductPage';
import { AddProductPage } from './pages/AddProductPage/AddProductPage';
import { AppRoute } from './constants';

export const appRouter = createBrowserRouter([
    {
        path: AppRoute.Root,
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <MainPage />
            },
            {
                path: AppRoute.CatalogGender,
                children: [
                    {
                        path: '',
                        element: <CatalogPage />
                    },
                    {
                        path: AppRoute.ProductType,
                        children: [
                            {
                                path: '',
                                element: <CatalogPage />
                            },
                            {
                                path: AppRoute.ProductId,
                                element: <ProductPage />
                            }
                        ]
                    }
                ]
            },
            {
                path: AppRoute.Login,
                element: <LoginPage />
            },
            {
                path: AppRoute.Cart,
                element: <CartPage />
            },
            {
                path: AppRoute.AdminPanel,
                children: [
                    {
                        path: '',
                        element: <PrivateRoute component={<AdminPanelPage />}/>
                    },
                    {
                        path: AppRoute.EditProduct,
                        element: <PrivateRoute component={<EditProductPage />}/>
                    },
                    {
                        path: AppRoute.Add,
                        element: <PrivateRoute component={<AddProductPage />}/>
                    }
                ]
            }
        ]
    }
]);
