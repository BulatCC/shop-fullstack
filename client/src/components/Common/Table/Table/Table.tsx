import style from './Table.module.scss';
import { TableProps } from './Table.type';

const Table = ({ children }: TableProps): JSX.Element => {
    return <table className={style['table']}>{children}</table>;
};

export { Table };
