import { useParams } from 'react-router-dom';
import { HeadBlock } from '../../components/Ui/HeadBlock/HeadBlock';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { Catalog } from '../../components/Ui/Catalog/Catalog';
import style from './CatalogPage.module.scss';
import { ClothsGender } from '../../constants';

const CatalogPage = (): JSX.Element => {
    const { productType, gender = ClothsGender.Woman } = useParams();

    return (
        <div className={style['catalog-page']}>
            <div className={`${style['catalog-page_container']} container`}>
                <BreadCrumbs classMod={`${style['catalog-page_bread-crumbs']} hidden-tablet`} />
            </div>
            <HeadBlock />
            <Catalog gender={gender} productType={productType}/>
        </div>
    );
};

export { CatalogPage };
