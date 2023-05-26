import { InputFieldProps } from './InputField.type';
import style from './InputField.module.scss';

const InputField = ({ classMod, placeholder = ' ', id, register, inputType, value, name, onChange }: InputFieldProps): JSX.Element => {
    return (
        <input
            className={`${style['input-field']} ${classMod ?? ''}`}
            type={inputType}
            placeholder={placeholder}
            value={value}
            id={id}
            {...register}
            onChange={onChange}
            name={name}
            autoFocus
        />
    );
};

export { InputField };
