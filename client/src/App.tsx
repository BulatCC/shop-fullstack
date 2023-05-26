import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routes';

const App = (): JSX.Element => {
    return <RouterProvider router={appRouter} />;
};

export { App };
