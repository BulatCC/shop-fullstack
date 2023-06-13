import { Link } from 'react-router-dom';
import { Form } from '../../Common/Form/Form/Form';
import { FormTitle } from '../../Common/Form/FormTitle/FormTitle';
import { FormInput } from '../../Common/Form/FormInput/FormInput';
import { FormButton } from '../../Common/Form/FormButton/FormButton';
import { RegisterFormProps, RegisterFormFields } from './RegisterForm.type';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AppRoute, EMAIL_REGEX } from '../../../constants';
import { singUp } from '../../../store/auth/auth';
import { useAppDispatch } from '../../../store/reduxHooks';

const RegisterForm = ({ classMod, onChangeShow }: RegisterFormProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm<RegisterFormFields>({
        mode: 'onBlur'
    });

    const submitHandler: SubmitHandler<RegisterFormFields> = (data): void => {
        const formattedData = JSON.parse(JSON.stringify(data));
        delete formattedData.confirm_password;

        void dispatch(singUp(formattedData));
    };
    return (
        <Form classMod={classMod} onSubmit={handleSubmit(submitHandler)}>
            <FormTitle>Register</FormTitle>
            <FormInput label='Name' isError={!!errors.name} name='name' errorText={errors.name?.message} autoFocus={true} register={
                register('name', {
                    required: 'Required field'
                })}/>
            <FormInput label='Email' isError={!!errors.email} name='email' errorText={errors.email?.message} register={
                register('email', {
                    required: true,
                    pattern: {
                        value: EMAIL_REGEX,
                        message: 'Email is not valid'
                    }
                })}/>
            <FormInput label='Password (6 characters at least)' name='password' inputType={'password'} isError={!!errors.password} errorText={errors.password?.message} register={
                register('password', {
                    required: true,
                    minLength: {
                        value: 6,
                        message: 'Passwords must be at least 6 characters'
                    }
                })}/>
            <FormInput label='Confirm password' inputType={'password'} isError={!!errors.confirm_password} name='confirm_password' errorText={errors.confirm_password?.message} register={
                register('confirm_password', {
                    validate: (val: string) => {
                        const { password } = getValues();
                        if (password !== val) {
                            return 'Passwords should match';
                        }
                    }
                })}/>
            <FormButton text='Sing up' type='submit' disabled={!isValid}/>
            <p>Already have account? <Link className='link' to={`/${AppRoute.Login}`}>Sign In</Link></p>
        </Form>
    );
};

export { RegisterForm };
