import { useParams } from 'react-router-dom';
import { HeadBlock } from '../../components/Ui/HeadBlock/HeadBlock';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { Catalog } from '../../components/Ui/Catalog/Catalog';
import style from './CatalogPage.module.scss';
import { ClothsGender } from '../../constants';

const screenWidth = document.documentElement.clientWidth;

const CatalogPage = (): JSX.Element => {
    const { gender = ClothsGender.Woman } = useParams();

    return (
        <div className={style['catalog-page']}>
            <div className={`${style['catalog-page_container']} container`}>
                {screenWidth < 768 && (
                    <BreadCrumbs classMod={style['catalog-page_bread-crumbs']} />
                )}
            </div>
            <HeadBlock />
            <Catalog gender={gender}/>
        </div>
    );
};

export { CatalogPage };
