import { PaginationProps } from './Pagination.type';
import style from './Pagination.module.scss';
import { useState } from 'react';
const Pagination = ({ pageDataCount, pageSize, currentPage = 1, handleChange }: PaginationProps): JSX.Element => {
    const pageCount = Math.ceil(pageDataCount / pageSize);
    const pages = Array.from(Array(pageCount), (_, i) => i + 1);
    const [active, setActive] = useState<number>(currentPage);

    if (pageCount < 2) {
        return <></>;
    }

    return (
        <ul className={style['pagination']}>
            {pages.map((pageNumber) => (
                <li className={style['pagination_item']} key={pageNumber}>
                    <button
                        className={style['pagination_button']}
                        onClick={() => {
                            handleChange(pageNumber);
                            setActive(pageNumber);
                        }}
                        disabled={pageNumber === active}
                    >
                        {pageNumber}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export { Pagination };
