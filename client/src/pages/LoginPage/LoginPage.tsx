import { useState } from 'react';
import style from './LoginPage.module.scss';
import { LoginForm } from '../../components/Ui/LoginForm/LoginForm';
import { RegisterForm } from '../../components/Ui/RegisterForm/RegisterForm';
import { useAppSelector } from '../../store/ReduxHooks';
import { getAuthorizationStatus } from '../../store/AppState/AppState';
import { AuthorizationStatus, AppRoute } from '../../constants';
import { Navigate } from 'react-router-dom';

const LoginPage = (): JSX.Element => {
    const authStatus = useAppSelector(getAuthorizationStatus());
    const [registerFormShown, setRegisterFormShown] = useState<boolean>(false);
    const handleFormShow = (): void => {
        setRegisterFormShown(!registerFormShown);
    };

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
            {registerFormShown
                ? <RegisterForm classMod={style.login_form} onChangeShow={handleFormShow}/>
                : <LoginForm classMod={style.login_form} onChangeShow={handleFormShow}/>}
        </div>
    );
};

export { LoginPage };
