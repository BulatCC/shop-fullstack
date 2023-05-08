import { FormWrapperProps } from './FormWrapper.type';
import style from '../Form.module.scss';

const FormWrapper = ({ children, classMod }: FormWrapperProps): JSX.Element => {
    return (
        <form className={`${style.form} ${classMod}`}>
            {children}
        </form>
    );
};

export { FormWrapper };
