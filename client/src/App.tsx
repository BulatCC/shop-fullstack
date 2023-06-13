import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appRouter } from './routes';
import { checkAuth } from './store/auth/auth';
import { useAppDispatch } from './store/reduxHooks';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        void dispatch(checkAuth());
    }, []);
    return (
        <>
            <RouterProvider router={appRouter} />
            <ToastContainer position="top-right" autoClose={1500} />
        </>
    );
};

export { App };
