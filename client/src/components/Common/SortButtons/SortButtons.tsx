import { SortButtonsProps } from './SortButtons.type';
import style from './SortButtons.module.scss';
import cn from 'classnames';

const SortButtons = ({ data, name, onChange, selected, classMod, setActiveByTitle = true }: SortButtonsProps): JSX.Element => {
    return (
        <ul className={cn(style['sort-buttons'], classMod)}>
            {data.map(({ title, value }) => (
                <li key={value}>
                    {
                        setActiveByTitle
                            ? <button className={cn(style['sort-buttons_button'], {
                                [style['active']]: selected === title
                            })}
                            type="button"
                            name={name}
                            value={title}
                            onClick={onChange}
                            >{title}</button>
                            : <button className={cn(style['sort-buttons_button'], {
                                [style['active']]: selected?.toString() === value.toString()
                            })}
                            type="button"
                            name={name}
                            value={value}
                            onClick={onChange}
                            >{title}</button>
                    }
                </li>
            ))}
        </ul>
    );
};

export { SortButtons };
