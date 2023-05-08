import { ChooseButtons as ButtonsChooseProps } from '../../../types/ButtomChoice';
import style from './ButtonsChoose.module.scss';

const ButtonsChoose = ({ data, name, onChange, selected, classMod }: ButtonsChooseProps): JSX.Element => {
    return (
        <nav className={`${classMod ?? ''}`}>
            <ul className={style['buttons-choose_list']}>
                {data.map(({ id, value }) => (
                    <li key={id}>
                        <button className={`${style['buttons-choose_link']} ${value === selected ? style.active : ''} `}
                            type="button"
                            name={name}
                            value={value}
                            onClick={onChange}
                        >{value}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export { ButtonsChoose };
