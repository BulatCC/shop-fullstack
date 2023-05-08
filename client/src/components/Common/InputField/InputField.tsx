import { InputFieldProps } from './InputField.type';
import style from './InputField.module.scss';

const InputField = ({ classMod, type = 'text', placeholder = ' ', id, inputRef }: InputFieldProps): JSX.Element => {
    return (
        <input
            className={`${style['input-field']} ${classMod ?? ''}`}
            type={type}
            placeholder={placeholder}
            ref={inputRef}
            id={id}
        />
    );
};

export { InputField };
