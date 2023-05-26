import { FormEditInputProps } from './FormEditInput.type';
import style from '../FormEdit.module.scss';

const FormEditInput = ({ id, defaultValue, inputType, name, onChange, required, register, placeholder, maxLength }: FormEditInputProps): JSX.Element => {
    return <input
        className={style['form-edit_input-text']}
        id={id}
        type={inputType}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        required={required}
        {...register}
        placeholder={placeholder}
        maxLength={maxLength}
    />;
};

export { FormEditInput };
