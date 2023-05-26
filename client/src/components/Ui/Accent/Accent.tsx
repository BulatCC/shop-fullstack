import { Link } from 'react-router-dom';
import { UserBlock } from '../UserBlock/UserBlock';
import { Nav } from '../../Common/Nav/Nav';
import { ClothsGender } from '../../../constants';
import style from './Accent.module.scss';
import { navData } from './Accent.data';

const Accent = (): JSX.Element => {
    return (
        <section className={`${style.accent} content`}>
            <h1 className="visually-hidden">Denim</h1>
            <div className="container">
                <div className={style.accent_wrapper}>
                    <Nav data={navData} classMod={style.accent_nav} />
                    <UserBlock classModUserBlock={style['accent_user-block']} classModDropdown={style['accent_user-block-dropdown']}/>
                </div>
                <div className={style.accent_container}>
                    <div className={style['accent_img-wrap']}>
                        <img src="/img/accent.jpg" alt="Куртка" className={style.accent_img} width="202" height="49"/>
                    </div>
                    <div className={style['accent_left-side']}>
                        <p className={style.accent_slogan}>The quality you deserve</p>
                        <img className={style.accent_logo} src="/img/svg/denim.svg" alt="Логотип" width="205" height="70" />
                        <Link className="button" to={`/${ClothsGender.Woman}`}>Check new collection</Link>
                    </div>
                </div>
                <div className={style.accent_footer}>
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
