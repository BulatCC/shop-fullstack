import { useLocation, Link } from 'react-router-dom';
import { UserBlock } from '../UserBlock/UserBlock';
import { AppRoute } from '../../../Consts';
import style from './Header.module.scss';

const Header = (): JSX.Element => {
    const { pathname } = useLocation();
    const isPageMain = pathname === '/' && true;

    return (
        <header className={style.header}>
            <div className="container">
                <div className={`${style.header_container} ${isPageMain
                    ? style['header_container--main']
                    : ''} `}>
                    {isPageMain
                        ? <span className={style.header_title}>Nîmes</span>
                        : <Link className={style.header_title} to={AppRoute.Root}>Nîmes</Link>}
                    {!isPageMain && <UserBlock />}
                </div>
            </div>
        </header>
    );
};

export { Header };
