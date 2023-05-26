import style from './TableBody.module.scss';
import { TableBodyProps } from './TableBody.type';

const TableBody = ({ children }: TableBodyProps): JSX.Element => {
    return <tbody className={style['t-body']}>{children}</tbody>;
};

export { TableBody };
