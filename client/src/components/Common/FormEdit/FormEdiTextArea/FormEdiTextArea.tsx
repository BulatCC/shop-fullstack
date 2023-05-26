import { FormEditInputProps } from './FormEdiTextArea.type';
import style from '../FormEdit.module.scss';

const FormEdiTextArea = ({ id, defaultValue, name, onChange, required, register }: FormEditInputProps): JSX.Element => {
    return <textarea className={style['form-edit_input-text']} id={id} defaultValue={defaultValue} name={name} onChange={onChange} required={required} {...register} />;
};

export { FormEdiTextArea };
