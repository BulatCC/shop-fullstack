import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { Pagination } from '../../components/Common/Pagination/Pagination';
import { useEffect, useState, useRef } from 'react';
import { mockAPI } from '../../services/api/api';
import { RequestParams } from './AdminPanelPage.type';
import { ProductDataType } from '../../types/ProductData.type';
import { AllProductsTable } from '../../components/Ui/AllProductsTable/AllProductsTable';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

const PRODUCTS_LOAD_LIMIT = 20;
const AdminPanelPage = (): JSX.Element => {
    const tableTopRef = useRef<HTMLDivElement | null>(null);
    const [allProducts, setAllProducts] = useState<[] | ProductDataType[] >([]);
    const [allProductsNumber, setAllProductsNumber] = useState<number>(0);
    const [requestParams, setRequestParams] = useState<RequestParams>({
        sliceIndexStart: 0,
        sliceIndexEnd: PRODUCTS_LOAD_LIMIT
    });

    useEffect(() => {
        mockAPI.getAllData(requestParams)
            .then(({ productCrop, productsAmount }) => {
                setAllProducts(productCrop);
                setAllProductsNumber(productsAmount);
            })
            .catch((error) => console.log(error));
        if (tableTopRef.current) {
            const tablePositionTop = tableTopRef.current.offsetTop;
            window.scrollTo(0, tablePositionTop);
        }
    }, [requestParams]);

    const handlePageChange = (pageNumber: number): void => {
        const newRequestParams = {
            sliceIndexStart: pageNumber * PRODUCTS_LOAD_LIMIT - PRODUCTS_LOAD_LIMIT,
            sliceIndexEnd: pageNumber * PRODUCTS_LOAD_LIMIT
        };

        setRequestParams(newRequestParams);
    };

    return (
        <div className='container'>
            <BreadCrumbs classMod='m-bottom'/>
            <Link to={AppRoute.Add} className='button m-bottom'>Add product</Link>
            <section ref={tableTopRef} className="content">
                <div className='m-bottom'>
                    <AllProductsTable data={allProducts}/>
                </div>
                <Pagination pageDataCount={allProductsNumber} pageSize={PRODUCTS_LOAD_LIMIT} handleChange={handlePageChange}/>
            </section>
        </div>

    );
};

export { AdminPanelPage };
