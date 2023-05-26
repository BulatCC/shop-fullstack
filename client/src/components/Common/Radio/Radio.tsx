import { CSSProperties } from 'react';
import { RadioProps } from './Radio.type';
import style from './Radio.module.scss';

const Radio = ({ data, name, checked, onChange, classMod }: RadioProps): JSX.Element => {
    return (
        <ul className={`${style.radio} ${classMod ?? ''}`}>
            {data.map((value) => (
                <li className={style.radio_item} key={value}>
                    <input
                        className={style.radio_button}
                        type="radio"
                        name={name}
                        id={value}
                        value={value}
                        checked={value === checked}
                        onChange={onChange}
                    />
                    <label htmlFor={value} style={{ '--radio-color': `${value ?? ''}` } as CSSProperties}></label>
                </li>
            ))}
        </ul>
    );
};

export { Radio };
