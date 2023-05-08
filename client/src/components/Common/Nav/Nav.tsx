import { Link } from 'react-router-dom';
import { NavProps } from './Nav.type';
import style from './Nav.module.scss';

const Nav = ({ data, classMod }: NavProps): JSX.Element => {
    return (
        <nav className={`${style.nav} ${classMod ?? ''}`}>
            {data.map(({ id, title, link }) => (
                <Link className={style.nav_link} to={link} key={id}>{title}</Link>
            ))}
        </nav>
    );
};

export { Nav };
