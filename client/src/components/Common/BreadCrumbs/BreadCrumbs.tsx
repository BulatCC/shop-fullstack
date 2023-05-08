import { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { BreadCrumbsProps } from './BreadCrumbs.type';
import style from './BreadCrumbs.module.scss';

const BreadCrumbs = ({ crumsbData, classMod }: BreadCrumbsProps): JSX.Element => {
    return (
        <nav className={`${style['bread-crumbs']} ${classMod ?? ''}`}>
            {crumsbData.map(({ id, title, link }, i) => (
                crumsbData.length === i + 1
                    ? <span key={id} className={style['bread-crumbs_link']}>{title}</span>
                    : <Fragment key={id}>
                        <Link className={style['bread-crumbs_link']} to={link}>{title}</Link>
                        <span className={style['bread-crumbs_divider']}>/</span>
                    </Fragment>

            ))}
        </nav>
    );
};

export { BreadCrumbs };
