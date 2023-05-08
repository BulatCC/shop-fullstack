import { Link } from 'react-router-dom';
import { BannerProps } from './Banner.type';
import { Img } from '../../Common/Img/Img';
import style from './Banner.module.scss';

const Banner = ({ link, imgPath, text, title }: BannerProps): JSX.Element => {
    return (
        <section className="content">
            <div className="container">
                <div className={style.banner}>
                    <div className={style.banner_container}>
                        <div className={style.banner_content}>
                            <p className={style.banner_text}>{text}</p>
                            <h2 className={`${style.title} title`} >{title}</h2>
                            {link && <Link className={`${style.button} button`} to={link}>Shop now</Link>}
                        </div>
                    </div>
                    <div className={style['banner_img-wrap']}>
                        <Img imgPath={imgPath} altText='boy and girl' className={style.banner_img} width="320" height="226"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Banner };
