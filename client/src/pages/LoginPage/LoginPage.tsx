import style from './LoginPage.module.scss';
import { LoginForm } from '../../components/Ui/LoginForm/LoginForm';
import { useAppSelector } from '../../store/reduxHooks';
import { getAuthorizationStatus } from '../../store/auth/auth';
import { AuthorizationStatus, AppRoute } from '../../constants';
import { Navigate } from 'react-router-dom';

const LoginPage = (): JSX.Element => {
    const authStatus = useAppSelector(getAuthorizationStatus());

    if (authStatus === AuthorizationStatus.Unknown) {
        return (
            <div className='container' style={{
                display: 'flex',
                height: '100%'
            }}>
                <h2 style={{ margin: 'auto' }}>Loading...</h2>
            </div>
        );
    }

    if (authStatus === AuthorizationStatus.Auth) {
        return <Navigate to={AppRoute.Root} />;
    }

    return (
        <div className={`${style.login} container`}>
            <LoginForm classMod={style.login_form}/>
        </div>
    );
};

export { LoginPage };
