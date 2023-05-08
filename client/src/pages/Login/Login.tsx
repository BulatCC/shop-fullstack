import { FormWrapper } from '../../components/Common/Form/FormWrapper/FormWrapper';
import { FormInput } from '../../components/Common/Form/FormInput/FormInput';
import { FormButton } from '../../components/Common/Form/FormButton/FormButton';
import { FormTitle } from '../../components/Common/Form/FormTitle/FormTitle';
import style from './Login.module.scss';

const Login = (): JSX.Element => {
    return (
        <div className={`${style.login} container`}>
            <FormWrapper classMod={style.login_form}>
                <FormTitle>Login</FormTitle>
                <FormInput label='Login' id='login' errorText='Login incorrect'/>
                <FormInput label='Password' id='password' errorText='Password incorrect'/>
                <FormButton text='Log In'/>
            </FormWrapper>
        </div>
    );
};

export { Login };
