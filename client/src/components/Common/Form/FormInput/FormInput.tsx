import { InputField } from '../../InputField/InputField';
import { FormInputProps } from './FormInput.type';
import style from '../Form.module.scss';

const FormInput = ({ label, id, errorText, isError, register, inputType, value, name, onChange, autoFocus }: FormInputProps): JSX.Element => {
    const labelText = isError ? errorText : label;
    return (
        <div className={`${style.form_container} ${isError ? style.error : ''}`}>
            <InputField
                id={id}
                classMod={style.form_input}
                register={register}
                inputType={inputType}
                value={value}
                name={name}
                onChange={onChange}
                autoFocus={autoFocus}
            />
            <label className={style.form_label} htmlFor={id}>{labelText}</label>
        </div>
    );
};

export { FormInput };
