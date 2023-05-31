import style from './RegisterPage.module.scss';
import { RegisterForm } from '../../components/Ui/RegisterForm/RegisterForm';
import { useAppSelector } from '../../store/ReduxHooks';
import { getAuthorizationStatus } from '../../store/AppState/AppState';
import { AuthorizationStatus, AppRoute } from '../../constants';
import { Navigate } from 'react-router-dom';

const RegisterPage = (): JSX.Element => {
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
            <RegisterForm classMod={style.login_form} />
            <div className={classes['lds-ellipsis']}></div>
        </div>
    );
};

export { RegisterPage };
