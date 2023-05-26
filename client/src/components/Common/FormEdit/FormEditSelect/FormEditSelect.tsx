import style from '../FormEdit.module.scss';
import { FormEditSelectProps } from './FormEditSelect.type';

const FormEditSelect = ({ name, id, children, defaultValue, onChange }: FormEditSelectProps): JSX.Element => {
    return <select
        className={style['form-edit_input-select']}
        name={name} id={id}
        defaultValue={defaultValue}
        onChange={onChange}
    >{children}</select>;
};

export { FormEditSelect };
