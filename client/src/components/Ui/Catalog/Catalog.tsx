import style from './Catalog.module.scss';
import { SortButtons } from '../../Common/SortButtons/SortButtons';
import { genderData, sortByData } from './CatalogData';
import { ButtonsChoose } from '../../Common/ButtonsChoose/ButtonsChoose';
// import { FilterCatalog } from '../FilterCatalog/FilterCatalog';
import { ProductList } from '../ProductList/ProductList';
import { MouseEvent, useEffect, useState } from 'react';
import { ProductDataType } from '../../../types/ProductData.type';
import { SortData } from '../../../pages/CatalogPage/СatalogPage.type';
import { SortType } from '../../../constants';
import { checkScrollPosition } from '../../../services/utils/utils';
import { API } from '../../../services/api/api';
import { CatalogProps } from './Catalog.type';

const PRODUCT_FIRST_LOAD_LIMIT = 9;
const PRODUCT_AJAX_LOAD_LIMIT = 8;
let isLoading = false;
const Catalog = ({ gender }: CatalogProps): JSX.Element => {
    const [catalogData, setCatalogData] = useState<ProductDataType[] | null>();
    console.log(catalogData)
    const [ajaxLoading, setAjaxLoading] = useState<boolean>(isLoading);
    const [catalogDataAmount, setCatalogDataAmount] = useState<number>(0);
    const [requestParams, setRequestParams] = useState<SortData>({
        sortBy: SortType.Popular,
        gender,
        sliceIndexStart: 0,
        sliceIndexEnd: PRODUCT_FIRST_LOAD_LIMIT
    });

    useEffect(() => {
        if (catalogData && catalogData.length !== catalogDataAmount) {
            window.addEventListener('scroll', fetchDataByScroll);
        }

        return () => {
            window.removeEventListener('scroll', fetchDataByScroll);
        };
    }, [catalogData]);

    useEffect(() => {
        API.getProductsData(requestParams)
            .then(({ productCrop, productsAmount }) => {
                setCatalogData(productCrop);
                setCatalogDataAmount(productsAmount);
            })
            .catch((error) => console.log(error));
    }, [requestParams]);

    const fetchDataByScroll = (): void => {
        if (checkScrollPosition() && catalogData && !isLoading) {
            isLoading = true;
            setAjaxLoading(isLoading);

            const ajaxRequestParams = {
                ...requestParams,
                sliceIndexStart: catalogData.length,
                sliceIndexEnd: catalogData.length + PRODUCT_AJAX_LOAD_LIMIT
            };

            void API.getProductsData(ajaxRequestParams)
                .then(({ productCrop }) => {
                    setCatalogData([...catalogData, ...productCrop]);
                    isLoading = false;
                    setAjaxLoading(isLoading);
                });
        }
    };

    const handleChange = (evt: MouseEvent<HTMLButtonElement>): void => {
        const { value, name } = evt.target as HTMLButtonElement;
        setRequestParams({
            ...requestParams,
            [name]: value
        });
        setCatalogData(null);
    };

    const getAjaxSkeletonNumber = (): number => {
        if (catalogData) {
            return catalogDataAmount - catalogData.length > PRODUCT_AJAX_LOAD_LIMIT
                ? PRODUCT_AJAX_LOAD_LIMIT
                : catalogDataAmount - catalogData.length;
        }
        return PRODUCT_AJAX_LOAD_LIMIT;
    };

    return (
        <div className="container">
            <div className={style['catalog_filter-container']}>
                <div className={style['catalog_sort-container']}>
                    <SortButtons
                        data={sortByData}
                        classMod={style['catalog_sort-buttons']}
                        name="sortBy"
                        onChange={handleChange}
                        selected={requestParams.sortBy}
                    />
                    <ButtonsChoose
                        data={genderData}
                        classMod={style['filter-container_buttons-choose']}
                        name="gender"
                        onChange={handleChange}
                        selected={gender}
                    />
                </div>
            </div>
            <section className="content">
                <ProductList
                    products={catalogData}
                    skeletonNumber={9}
                    classMod={style['catalog_product-list']}
                    isCatalog

                />
                {ajaxLoading && <div style={{ marginTop: '2rem' }}>
                    <ProductList
                        products={null}
                        skeletonNumber={getAjaxSkeletonNumber()}
                        classMod={style['catalog_product-list']}
                        isCatalog
                    />
                </div>}
            </section>
        </div>
    );
};

export { Catalog };
