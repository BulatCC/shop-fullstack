import { SortButtonsProps } from './SortButtons.type';
import style from './SortButtons.module.scss';
import cn from 'classnames';

const SortButtons = ({ data, name, onChange, selected, classMod }: SortButtonsProps): JSX.Element => {
    return (
        <ul className={cn(style['sort-buttons'], classMod)}>
            {data.map((value) => (
                <li key={value}>
                    <button className={cn(style['sort-buttons_button'], {
                        [style['active']]: selected === value
                    })}
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
