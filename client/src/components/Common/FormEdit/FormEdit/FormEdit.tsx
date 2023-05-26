import { FormEditProps } from './FormEdit.type';
import style from '../FormEdit.module.scss';

const FormEdit = ({ children, onSubmit, classMod }: FormEditProps): JSX.Element => {
    return (
        <form className={`${style['form-edit']} ${classMod ?? ''}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export { FormEdit };
