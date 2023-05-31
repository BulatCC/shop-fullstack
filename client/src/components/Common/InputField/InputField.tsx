import { InputFieldProps } from './InputField.type';
import style from './InputField.module.scss';
import cn from 'classnames';

const InputField = ({ classMod, placeholder = ' ', id, register, inputType, value, name, onChange, autoFocus }: InputFieldProps): JSX.Element => {
    return (
        <input
            className={cn(style['input-field'], classMod)}
            type={inputType}
            placeholder={placeholder}
            value={value}
            id={id}
            {...register}
            onChange={onChange}
            name={name}
            autoFocus={autoFocus}
        />
    );
};

export { InputField };
