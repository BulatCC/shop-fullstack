import style from './Catalog.module.scss';
import { SortButtons } from '../../Common/SortButtons/SortButtons';
import { genderData, sortByData, productTypeData } from './CatalogData';
import { ButtonsChoose } from '../../Common/ButtonsChoose/ButtonsChoose';
import { ProductList } from '../ProductList/ProductList';
import { MouseEvent, useEffect, useState } from 'react';
import { ProductDataType } from '../../../types/ProductData.type';
import { QueryParams } from '../../../services/api/api.type';
import { SortType } from '../../../constants';
import { checkScrollPosition } from '../../../services/utils/utils';
import { CatalogProps } from './Catalog.type';
import { productsApi } from '../../../services/api/products.api';

const PRODUCT_FIRST_LOAD_LIMIT = 9;
const PRODUCT_AJAX_LOAD_LIMIT = 8;
let isLoading = false;
const Catalog = ({ gender, productType }: CatalogProps): JSX.Element => {
    const [catalogData, setCatalogData] = useState<ProductDataType[] | null>();

    const [ajaxLoading, setAjaxLoading] = useState<boolean>(isLoading);
    const [catalogDataAmount, setCatalogDataAmount] = useState<number>(0);
    const [requestParams, setRequestParams] = useState<QueryParams>({
        sortBy: SortType.Popular.value,
        sliceIndexStart: 0,
        loadLimit: PRODUCT_FIRST_LOAD_LIMIT,
        queryParams: {
            gender,
            productType
        }
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
        productsApi.products(requestParams)
            .then(({ products, productsAmount }) => {
                setCatalogData(products);
                setCatalogDataAmount(productsAmount);
            })
            .catch(error => console.log(error));
    }, [requestParams]);

    const fetchDataByScroll = (): void => {
        if (checkScrollPosition() && catalogData && !isLoading) {
            isLoading = true;
            setAjaxLoading(isLoading);

            const ajaxRequestParams = {
                ...requestParams,
                sliceIndexStart: catalogData.length,
                loadLimit: PRODUCT_AJAX_LOAD_LIMIT
            };

            productsApi.products(ajaxRequestParams)
                .then(({ products }) => {
                    setCatalogData([...catalogData, ...products]);
                    isLoading = false;
                    setAjaxLoading(isLoading);
                })
                .catch(error => console.log(error));
        }
    };

    const handleSortChange = (evt: MouseEvent<HTMLButtonElement>): void => {
        const { value, name } = evt.target as HTMLButtonElement;
        console.log({ value, name });
        setRequestParams({
            ...requestParams,
            [name]: value
        });
        setCatalogData(null);
    };

    const handleQueryChange = (evt: MouseEvent<HTMLButtonElement>): void => {
        const { value, name } = evt.target as HTMLButtonElement;
        setRequestParams({
            ...requestParams,
            queryParams: {
                ...requestParams.queryParams,
                [name]: value
            }
        });
        setCatalogData(null);
    };

    console.log(catalogDataAmount);
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
                        onChange={handleSortChange}
                        selected={requestParams.sortBy}
                        setActiveByTitle={false}
                    />
                    <SortButtons
                        data={productTypeData}
                        classMod={style['catalog_sort-buttons']}
                        name="productType"
                        onChange={handleQueryChange}
                        selected={requestParams.queryParams.productType}
                        setActiveByTitle={false}
                    />
                    <ButtonsChoose
                        data={genderData}
                        classMod={style['filter-container_buttons-choose']}
                        name="gender"
                        onChange={handleQueryChange}
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
