import { RadioProps } from './Radio.type';
import style from './Radio.module.scss';

const Radio = ({ data, name, checked, onChange, classMod }: RadioProps): JSX.Element => {
    return (
        <ul className={`${style.radio} ${classMod ?? ''}`}>
            {data.map(({ id, value, color }) => (
                <li className={style.radio_item} key={id}>
                    <input
                        className={style.radio_button}
                        type="radio"
                        name={name}
                        id={id}
                        value={value}
                        checked={value === checked}
                        onChange={onChange}
                    />
                    <label htmlFor={id} style={{ '--radio-color': `${color ?? ''}` } as React.CSSProperties}></label>
                </li>
            ))}
        </ul>
    );
};

export { Radio };
