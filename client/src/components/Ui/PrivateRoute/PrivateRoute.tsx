import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/reduxHooks';
import { getAuthorizationStatus } from '../../../store/auth/auth';
import { AuthorizationStatus, AppRoute } from '../../../constants';
import { PrivateRouteProps } from './PrivateRoute.type';

const PrivateRoute = ({ component, redirectPath = `/${AppRoute.Login}` }: PrivateRouteProps): JSX.Element => {
    const authorizationStatus = useAppSelector(getAuthorizationStatus());

    if (authorizationStatus === AuthorizationStatus.Unknown) {
        return <h2>Loading...</h2>;
    }

    if (authorizationStatus === AuthorizationStatus.NoAuth) {
        return <Navigate to={redirectPath} />;
    }

    return component;
};

export { PrivateRoute };
