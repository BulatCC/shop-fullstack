import { useLocation, Link } from 'react-router-dom';
import { UserBlock } from '../UserBlock/UserBlock';
import { AppRoute } from '../../../constants';
import style from './Header.module.scss';
import cn from 'classnames';

const Header = (): JSX.Element => {
    const { pathname } = useLocation();
    const isPageMain = pathname === '/' && true;

    return (
        <header className={style.header}>
            <div className="container">
                <div className={cn(style.header_container, {
                    [style['header_container--main']]: isPageMain
                })}>
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
