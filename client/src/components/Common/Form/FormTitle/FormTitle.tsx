import { FormTitleProps } from './FormTitle.type';
import style from '../Form.module.scss';

const FormTitle = ({ children }: FormTitleProps): JSX.Element => {
    return (
        <h1 className={`${style.form_title} title`}>{children}</h1>
    );
};

export { FormTitle };
