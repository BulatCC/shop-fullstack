import { InputField } from '../../InputField/InputField';
import { FormInputProps } from './FormInput.type';
import style from '../Form.module.scss';
import cn from 'classnames';

const FormInput = ({ label, id, errorText, isError, ...rest }: FormInputProps): JSX.Element => {
    const labelText = isError ? errorText : label;
    return (
        <div className={cn(style.form_container, {
            [style.error]: isError
        })}>
            <InputField id={id} classMod={style.form_input} {...rest} />
            <label className={style.form_label} htmlFor={id}>{labelText}</label>
        </div>
    );
};

export { FormInput };
