import { Link } from 'react-router-dom';
import { BannerProps } from './Banner.type';
import style from './Banner.module.scss';
import cn from 'classnames';

const Banner = ({ link, imgPath, text, title, classMod }: BannerProps): JSX.Element => {
    return (
        <section className={cn('content', classMod)}>
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
                        <img src={imgPath} alt='boy and girl' className={style.banner_img} width="320" height="226"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Banner };
