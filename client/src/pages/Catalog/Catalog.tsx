import { useParams } from 'react-router-dom';
import { useState, useEffect, MouseEvent } from 'react';
import { HeadBlock } from '../../components/Ui/HeadBlock/HeadBlock';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { SortButtons } from '../../components/Common/SortButtons/SortButtons';
import { FilterCatalog } from '../../components/Ui/FilterCatalog/FilterCatalog';
import { ButtonsChoose } from '../../components/Common/ButtonsChoose/ButtonsChoose';
import { ProductList } from '../../components/Ui/ProductList/ProductList';
import { Pagination } from '../../components/Common/Pagination/Pagination';
import { mockCrumbsData } from '../../services/mocks';
import style from './Catalog.module.scss';
import { SortType, ClothsGender } from '../../Consts';
import { API } from '../../services/api';
import { ProductCard } from '../../types/ProductCard';
import { sortByData, genderData } from './CatalogData';

const screenWidth = document.documentElement.clientWidth;

const Catalog = (): JSX.Element => {
    const params = useParams();
    console.log(params);
    const [catalogData, setCatalogData] = useState<ProductCard[]>();
    const [sortData, setSortData] = useState({
        sortBy: SortType.Popular,
        gender: ClothsGender.Woman
    });

    useEffect(() => {
        API.getAllCatalogData()
            .then((data) => setCatalogData(data as ProductCard[]))
            .catch((error) => console.log(error));
    }, []);

    const handleChange = (evt: MouseEvent<HTMLButtonElement>): void => {
        const { value, name } = evt.target as HTMLButtonElement;
        setSortData({
            ...sortData,
            [name]: value
        });
    };

    // типа ajax, надо допиливать
    // const clickHandler = () => {
    //     API.getCatalogData()
    //     .then(data => setCatalogData([...catalogData as ProductCard[], ...data as ProductCard[]]))
    // }

    return (
        <div className={style.catalog}>
            <div className={`${style.catalog_container} container`}>
                {screenWidth < 768 && (
                    <BreadCrumbs
                        crumsbData={mockCrumbsData}
                        classMod={style['catalog_bread-crumbs']}
                    />
                )}
            </div>
            <HeadBlock />
            <div className="container">
                <div className={style['catalog_filter-container']}>
                    <div className={style['catalog_sort-container']}>
                        <SortButtons
                            data={sortByData}
                            classMod={style['catalog_sort-buttons']}
                            name="sortBy"
                            onChange={handleChange}
                            selected={sortData.sortBy}
                        />
                        <ButtonsChoose
                            data={genderData}
                            classMod={style['filter-container_buttons-choose']}
                            name="gender"
                            onChange={handleChange}
                            selected={sortData.gender}
                        />
                    </div>
                    <FilterCatalog classMod={style['catalog_dropdown-menu']} />
                </div>
                <section className="content">
                    <ProductList
                        products={catalogData}
                        skeletonNumber={9}
                        classMod={style['catalog_product-list']}
                        isCatalog
                    />
                </section>
                <section className="content pd-7-descktop">
                    <Pagination />
                </section>
            </div>
        </div>
    );
};

export { Catalog };
