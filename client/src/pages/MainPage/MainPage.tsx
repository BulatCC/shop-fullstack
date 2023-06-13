import { useState, useEffect } from 'react';
import { Accent } from '../../components/Ui/Accent/Accent';
import { ProductsPreviewList } from '../../components/Ui/ProductsPreviewList/ProductsPreviewList';
import { Banner } from '../../components/Ui/Banner/Banner';
import { ClothsGender } from '../../constants';
import { productsApi } from '../../services/api/products.api';
import { MainPageData } from './MainPage.type';
import style from './MainPage.module.scss';

const MOCK_ARRAY_FOR_SKELETON_LOADER = [1, 2, 3, 4];
const MainPage = (): JSX.Element => {
    const [mainPageData, setMainPageData] = useState<MainPageData | number[] >(MOCK_ARRAY_FOR_SKELETON_LOADER);

    useEffect(() => {
        productsApi.mainPageData()
            .then((data) => {
                console.log(data);
                setMainPageData(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={style['main-page_container']}>
            <Accent />
            <Banner
                link={ClothsGender.Woman}
                imgPath="/img/banner.jpg"
                title="Fall 2023"
                text="Street fashion collection"
                classMod={style['main-page_banner']}
            />
            {mainPageData.map((data, i) => {
                const categoryName = Object.keys(data)[0];
                console.log(Object.keys(data)[0]);

                return <ProductsPreviewList
                    title={categoryName}
                    link={`${ClothsGender.Woman}/${categoryName}`}
                    products={typeof data === 'number' ? null : data[categoryName]}
                    key={i}
                />;
            })}
        </div>
    );
};

export { MainPage };
