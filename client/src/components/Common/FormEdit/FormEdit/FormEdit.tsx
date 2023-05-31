import { FormEditProps } from './FormEdit.type';
import style from '../FormEdit.module.scss';
import cn from 'classnames';

const FormEdit = ({ children, onSubmit, classMod }: FormEditProps): JSX.Element => {
    return (
        <form className={cn(style['form-edit'], classMod)} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export { FormEdit };
