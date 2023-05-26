import { FormButtonProps } from './FormButton.type';
import style from '../Form.module.scss';

const FormButton = ({ text, type = 'button', disabled }: FormButtonProps): JSX.Element => {
    return (
        <button className={`${style.form_button} button`} type={type} disabled={disabled}>{text}</button>
    );
};

export { FormButton };
