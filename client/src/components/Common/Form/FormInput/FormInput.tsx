import { InputField } from '../../InputField/InputField';
import { FormInputProps } from './FormInput.type';
import style from '../Form.module.scss';

const FormInput = ({ label, id, errorText, isError }: FormInputProps): JSX.Element => {
    const labelText = isError ? errorText : label;
    return (
        <div className={`${style.form_container} ${isError ? style.error : ''}`}>
            <InputField id={id} classMod={style.form_input}/>
            <label className={style.form_label} htmlFor={id}>{labelText}</label>
        </div>
    );
};

export { FormInput };
