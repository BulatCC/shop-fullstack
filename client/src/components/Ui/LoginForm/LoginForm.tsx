import { Form } from '../../Common/Form/Form/Form';
import { FormTitle } from '../../Common/Form/FormTitle/FormTitle';
import { FormInput } from '../../Common/Form/FormInput/FormInput';
import { FormButton } from '../../Common/Form/FormButton/FormButton';
import { LoginFormProps, LoginFormFields } from './LoginForm.type';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX, AuthorizationStatus } from '../../../constants';
import { useAppDispatch } from '../../../store/ReduxHooks';
import { setAuthorizationStatus } from '../../../store/AppState/AppState';

const LoginForm = ({ classMod, onChangeShow }: LoginFormProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormFields>({
        mode: 'onBlur'
    });

    const submitHandler: SubmitHandler<LoginFormFields> = (data) => {
        console.log(data);
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    };
    return (
        <Form classMod={classMod} onSubmit={handleSubmit(submitHandler)}>
            <FormTitle>Login</FormTitle>
            <FormInput label='Email' isError={!!errors.email} id='email' errorText={errors.email?.message} autoFocus={true} register={
                register('email', {
                    required: 'Required field',
                    pattern: {
                        value: EMAIL_REGEX,
                        message: 'Email is not valid'
                    }
                })}/>
            <FormInput label='Password (6 characters at least)' inputType={'password'} isError={!!errors.password} id='password' errorText={errors.password?.message} register={
                register('password', {
                    required: 'Required field',
                    minLength: {
                        value: 6,
                        message: 'Passwords must be at least 6 characters'
                    }
                })}/>
            <FormButton text='Log In' type='submit' disabled={!isValid}/>
            <p>Dont have account? <span className={'link'} onClick={onChangeShow}>Sign Up</span></p>
        </Form>
    );
};

export { LoginForm };
