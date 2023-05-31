import { Link } from 'react-router-dom';
import { UserBlockProps } from './UserBlock.types';
import { SearchBlock } from '../../Common/SearchBlock/SearchBlock';
import { AppRoute, AuthorizationStatus } from '../../../constants';
import style from './UserBlock.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/ReduxHooks';
import { getCart, getAuthorizationStatus, setAuthorizationStatus } from '../../../store/AppState/AppState';
import { MouseEvent, useState } from 'react';
import { useOpenMenu } from '../../../hooks/useOpenMenu';

const UserBlock = ({ classModUserBlock, classModDropdown }: UserBlockProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const cartItemsCount = useAppSelector(getCart())?.length;
    const authStatus = useAppSelector(getAuthorizationStatus());
    const [dropdownShow, setDropdownShow] = useState(false);
    const handleDropdownClick = (evt: MouseEvent<HTMLDivElement>): void => {
        evt.stopPropagation();
        setDropdownShow(!dropdownShow);
    };

    const handleLogout = (): void => {
        console.log('Logout');
        dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    };

    useOpenMenu(dropdownShow, setDropdownShow, 'js-dropdown');

    return (
        <div className={`${style['user-block']} ${classModUserBlock ?? ''}`}>
            <ul className={style['user-block_list']}>
                <li className={`${style['user-block_list-item']} ${style['user-block_list-item--search']}`}>
                    <SearchBlock/>
                </li>
                <li className={`${style['user-block_list-item']} js-dropdown`}>
                    {authStatus === AuthorizationStatus.Auth
                        ? <>
                            <div className={style['user-block_item']} onClick={handleDropdownClick}>
                                <img className={style['user-block_img']} src="/img/svg/person.svg" alt="LoginPage" width="24" height="24" />
                                <span className={style['user-block_text']}>Profile</span>
                            </div>
                            {dropdownShow && <ul className={`${style['user-block_dropdown']} ${classModDropdown ?? ''}`}>
                                <li>
                                    <Link className={style['user-block_dropdown-text']} to={AppRoute.AdminPanel}>Admin panel</Link>
                                </li>
                                <li>
                                    <button className={style['user-block_dropdown-text']} onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>}
                        </>
                        : <Link className={style['user-block_item']} to={AppRoute.Login}>
                            <img className={style['user-block_img']} src="/img/svg/person.svg" alt="LoginPage" width="24" height="24" />
                            <span className={style['user-block_text']}>Login</span>
                        </Link>
                    }

                </li>
                <li className={style['user-block_list-item']}>
                    <Link className={style['user-block_item']} to={AppRoute.Cart}>
                        <span className={style['user-block_cart-count']}>{cartItemsCount}</span>
                        <img className={style['user-block_img']} src="/img/svg/cart.svg" alt="корзина" width="24" height="24" />
                        <span className={style['user-block_text']}>Cart</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export { UserBlock };
