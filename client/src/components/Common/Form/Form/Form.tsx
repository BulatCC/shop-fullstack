import { FormWrapperProps } from './Form.type';
import style from '../Form.module.scss';
import cn from 'classnames';

const Form = ({ children, classMod, onSubmit }: FormWrapperProps): JSX.Element => {
    return (
        <form className={cn(style['form'], classMod)} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export { Form };
