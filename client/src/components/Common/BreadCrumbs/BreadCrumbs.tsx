import { Link, useLocation } from 'react-router-dom';
import { BreadCrumbsProps, BreadCrumbsPath } from './BreadCrumbs.type';
import style from './BreadCrumbs.module.scss';
import { AppRoute } from '../../../constants';
import { useEffect, useState } from 'react';

const BreadCrumbs = ({ classMod, productName }: BreadCrumbsProps): JSX.Element => {
    const location = useLocation().pathname;
    const urlPath = location.split('/').slice(1);
    const breadCrumbsDefaultPath = urlPath.map(path => ({
        name: path,
        link: path
    }));

    const [breadCrumbsPath, setBreadCrumbsPath] = useState<BreadCrumbsPath[]>(breadCrumbsDefaultPath);
    if (location === AppRoute.Root) {
        return <></>;
    }

    useEffect(() => {
        if (productName) {
            // const index = breadCrumbsPath.findIndex(({ name }) => name === productName?.id);
            const newBreadCrumbsPath = [...breadCrumbsDefaultPath];
            newBreadCrumbsPath[newBreadCrumbsPath.length - 1] = {
                ...breadCrumbsPath[newBreadCrumbsPath.length - 1],
                name: productName
            };
            setBreadCrumbsPath(newBreadCrumbsPath);
        }
    }, [productName]);

    const renderBreadCrumbs = (): JSX.Element[] => {
        const path: string[] = [];
        return breadCrumbsPath.map(({ name, link }, i) => {
            path.push(name);
            const constructedPath = path.join('/');
            if (i === urlPath.length - 1) {
                return <span className={style['bread-crumbs_link']} key={i}>{name}</span>;
            } else {
                return <Link className={style['bread-crumbs_link']} to={`/${constructedPath}`} key={i}>{name}</Link>;
            }
        });
    };

    return (
        <nav className={`${style['bread-crumbs']} ${classMod ?? ''}`}>
            <Link className={style['bread-crumbs_link']} to={AppRoute.Root}>Main</Link>
            {renderBreadCrumbs()}
        </nav>
    );
};

export { BreadCrumbs };
