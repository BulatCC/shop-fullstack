import { Link } from 'react-router-dom';
import { UserBlock } from '../UserBlock/UserBlock';
import { Img } from '../../Common/Img/Img';
import { Nav } from '../../Common/Nav/Nav';
import { AppRoute } from '../../../Consts';
import style from './Accent.module.scss';
import arrowDown from '../../../assets/img/svg/arrowDown.svg';

const Accent = (): JSX.Element => {
    const navData = [
        {
            id: '1',
            title: 'Woman',
            link: `/${AppRoute.Catalog}/${AppRoute.CatalogWoman}`
        },
        {
            id: '2',
            title: 'Man',
            link: `/${AppRoute.Catalog}/${AppRoute.CatalogMan}`
        }
    ];

    return (
        <section className={`${style.accent} content`}>
            <h1 className="visually-hidden">Denim</h1>
            <div className="container">
                <div className={style.accent_wrapper}>
                    <Nav data={navData} classMod={style.accent_nav} />
                    <UserBlock classMod={style['accent_user-block']} />
                </div>
                <div className={style.accent_container}>
                    <div className={style['accent_img-wrap']}>
                        <Img imgPath='/img/accent' altText='Куртка' className={style.accent_img} width="202" height="49" />
                    </div>
                    <div className={style['accent_left-side']}>
                        <p className={style.accent_slogan}>The quality you deserve</p>
                        <img className={style.accent_logo} src="/img/svg/denim.svg" alt="Логотип" width="205" height="70" />
                        <Link className="button" to={AppRoute.Catalog}>Check new collection</Link>
                    </div>
                </div>
                <div className={style.accent_footer}>
                    <a className={style['accent_arrow-down']} href="#scroll-down">
                        <img src={arrowDown} alt="вниз" width="10" height="27" />
                    </a>
                    <div className={style.accent_social}>
                        <a className={style['accent_social-link']} href='https://www.instagram.com'>Instagram</a>
                        <a className={style['accent_social-link']} href='https://www.facebook.com'>Facebook</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Accent };
