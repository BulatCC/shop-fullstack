import { Link } from 'react-router-dom';
import { ButtonIconProps } from './ButtonIcon.type';
import style from './ButtonIcon.module.scss';

const ButtonIcon = ({ imgUrl, altText, onClick, link }: ButtonIconProps): JSX.Element => {
    if (link) {
        return (
            <Link to={link} className={style['button-icon']} onClick={onClick}>
                <img className={style['button-icon_img']} src={imgUrl} alt={altText} width='20' height='20'/>
            </Link>
        );
    }
    return (
        <button className={style['button-icon']} onClick={onClick}>
            <img className={style['button-icon_img']} src={imgUrl} alt={altText} width='20' height='20'/>
        </button>
    );
};

export { ButtonIcon };
