import { FormEditLabelProps } from './FormEditLabel.type';
import style from '../FormEdit.module.scss';

const FormEditLabel = ({ children, idFor }: FormEditLabelProps): JSX.Element => {
    return <label className={style['form-edit_label']} htmlFor={idFor}>{children}</label>;
};

export { FormEditLabel };
