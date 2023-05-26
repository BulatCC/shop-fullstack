import { FormWrapperProps } from './Form.type';
import style from '../Form.module.scss';

const Form = ({ children, classMod, onSubmit }: FormWrapperProps): JSX.Element => {
    return (
        <form className={`${style.form} ${classMod ?? ''}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export { Form };
