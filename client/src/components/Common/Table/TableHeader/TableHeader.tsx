import style from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.type';

const TableHeader = ({ children }: TableHeaderProps): JSX.Element => {
    return <tbody className={style['t-header']}>{children}</tbody>;
};

export { TableHeader };
