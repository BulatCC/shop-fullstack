import style from './Pagination.module.scss';

const Pagination = (): JSX.Element => {
    return (
        <div className={style.pagination}>
            <p className={style.pagination_text} style={{ '--pagination-width': '20%' } as React.CSSProperties}>Showing 9 of 45 items</p>
            <button className={`${style.pagination_button} button`} type="button">Load more</button>
        </div>
    );
};

export { Pagination };
