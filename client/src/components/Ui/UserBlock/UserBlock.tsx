import { Link } from 'react-router-dom';
import { UserBlockProps } from './UserBlock.types';
import { SearchBlock } from '../../Common/SearchBlock/SearchBlock';
import { AppRoute } from '../../../Consts';
import style from './UserBlock.module.scss';

const UserBlock = ({ classMod }: UserBlockProps): JSX.Element => {
    return (
        <div className={`${style['user-block']} ${classMod ?? ''}`}>
            <ul className={style['user-block_list']}>
                <li className={style['user-block_list-item']}>
                    <SearchBlock/>
                </li>
                <li className={style['user-block_list-item']}>
                    <Link className={style['user-block_item']} to={AppRoute.Login}>
                        <img className={style['user-block_img']} src="/img/svg/person.svg" alt="Login" width="24" height="24" />
                    </Link>
                </li>
                <li className={style['user-block_list-item']}>
                    <Link className={style['user-block_item']} to={AppRoute.Cart}>
                        <span className={style['user-block_cart-count']}>0</span>
                        <img className={style['user-block_img']} src="/img/svg/cart.svg" alt="корзина" width="24" height="24" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export { UserBlock };
