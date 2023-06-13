import { Form } from '../../Common/Form/Form/Form';
import { FormTitle } from '../../Common/Form/FormTitle/FormTitle';
import { FormInput } from '../../Common/Form/FormInput/FormInput';
import { FormButton } from '../../Common/Form/FormButton/FormButton';
import { LoginFormProps, LoginFormFields } from './LoginForm.type';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX, AppRoute } from '../../../constants';
import { useAppDispatch } from '../../../store/reduxHooks';
import { Link } from 'react-router-dom';
import { singIn } from '../../../store/auth/auth';

const LoginForm = ({ classMod, onChangeShow }: LoginFormProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<LoginFormFields>({
        mode: 'onBlur'
    });

    const validationSchema = {
        required: 'Required field',
        pattern: {
            value: EMAIL_REGEX,
            message: 'Email is not valid'
        }
    };

    const submitHandler: SubmitHandler<LoginFormFields> = (data) => {
        console.log(data);
        void dispatch(singIn(data));
    };
    return (
        <Form classMod={classMod} onSubmit={handleSubmit(submitHandler)}>
            <FormTitle>Login</FormTitle>
            <FormInput label='Email' isError={!!errors.email} name='email' errorText={errors.email?.message} autoFocus={true} register={register('email', {
                required: 'Required field',
                pattern: {
                    value: EMAIL_REGEX,
                    message: 'Email is not valid'
                }
            })}
            validationSchema={validationSchema}/>
            <FormInput label='Password (6 characters at least)' inputType={'password'} isError={!!errors.password} name={'password'} errorText={errors.password?.message} register={
                register('password', {
                    required: 'Required field',
                    minLength: {
                        value: 6,
                        message: 'Passwords must be at least 6 characters'
                    }
                })}/>
            <FormButton text='Log In' type='submit' disabled={!isValid}/>
            <p>Dont have account? <Link className='link' to={`/${AppRoute.Register}`}>Sign Up</Link></p>
        </Form>
    );
};

export { LoginForm };
