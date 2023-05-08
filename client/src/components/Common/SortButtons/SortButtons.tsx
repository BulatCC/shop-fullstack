import { ChooseButtons as SortButtonsProps } from '../../../types/ButtomChoice';
import style from './SortButtons.module.scss';

const SortButtons = ({ data, name, onChange, selected, classMod }: SortButtonsProps): JSX.Element => {
    return (
        <ul className={`${style['sort-buttons']} ${classMod ?? ''}`}>
            {data.map(({ id, value }) => (
                <li key={id}>
                    <button className={`${style['sort-buttons_button']} ${value === selected ? style.active : ''}`}
                        type="button"
                        name={name}
                        value={value}
                        onClick={onChange}
                    >{value}</button>
                </li>
            ))}
        </ul>
    );
};

export { SortButtons };
