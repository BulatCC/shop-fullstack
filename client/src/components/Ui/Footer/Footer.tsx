import style from './Footer.module.scss';

const Footer = (): JSX.Element => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer_container}>
                    <h2 className={style.footer_title}>Nîmes</h2>
                    <nav className={style.footer_links}>
                        <a className={style.footer_link} href="#">Shop</a>
                        <a className={style.footer_link} href="#">Delivery</a>
                        <a className={style.footer_link} href="#">Service</a>
                        <a className={style.footer_link} href="#">Contacts</a>
                    </nav>
                    <ul className={style['footer_social-list']}>
                        <li className={style['footer_social-item']}>
                            <a className={style['footer_social-link']} href="#">
                                <img src="/img/svg/fb.svg" alt="facebook" width="10.5" height="20" />
                            </a>
                        </li>
                        <li className={style['footer_social-item']}>
                            <a className={style['footer_social-link']} href="#">
                                <img src="/img/svg/instagram.svg" alt="instagram" width="20" height="20" />
                            </a>
                        </li>
                        <li className={style['footer_social-item']}>
                            <a className={style['footer_social-link']} href="#">
                                <img src="/img/svg/pinterest.svg" alt="pinterest" width="20" height="20" />
                            </a>
                        </li>
                        <li className={style['footer_social-item']}>
                            <a className={style['footer_social-link']} href="#">
                                <img src="/img/svg/twitter.svg" alt="twitter" width="20" height="20" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
