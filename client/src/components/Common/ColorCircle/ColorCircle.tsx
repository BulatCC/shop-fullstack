import { ColorCircleProps } from './ColorCircle.type';
import style from './ColorCircle.module.scss';
import { CSSProperties } from 'react';

const ColorCircle = ({ color }: ColorCircleProps): JSX.Element => {
    return <span className={style['color-circle']} style={{ '--color-circle-color': `${color}` } as CSSProperties}></span>;
};

export { ColorCircle };
