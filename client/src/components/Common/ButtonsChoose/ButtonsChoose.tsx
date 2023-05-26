import { ButtonChooseProps } from './ButtonsChoose.type';
import style from './ButtonsChoose.module.scss';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

const ButtonsChoose = ({ data, name, onChange, selected, classMod }: ButtonChooseProps): JSX.Element => {
    const navigate = useNavigate();
    return (
        <nav className={`${classMod ?? ''}`}>
            <ul className={style['buttons-choose_list']}>
                {data.map(({ id, value }) => (
                    <li key={id}>
                        <button className={`${style['buttons-choose_link']} ${value === selected ? style.active : ''} `}
                            type="button"
                            name={name}
                            value={value}
                            onClick={(evt: MouseEvent<HTMLButtonElement>) => {
                                onChange(evt);
                                navigate(`/${value}`);
                            }}
                        >{value}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export { ButtonsChoose };
