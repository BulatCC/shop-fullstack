import { useState, useEffect } from 'react';
import { Accent } from '../../components/Ui/Accent/Accent';
import { ProductsPreviewList } from '../../components/Ui/ProductsPreviewList/ProductsPreviewList';
import { Banner } from '../../components/Ui/Banner/Banner';
import { ClothsGender } from '../../constants';
import { API } from '../../services/api/api';
import { MainPageData } from './MainPage.type';
import style from './MainPage.module.scss';

const MOCK_ARRAY_FOR_SKELETON_LOADER = [1, 2, 3, 4];
const MainPage = (): JSX.Element => {
    const [mainPageData, setMainPageData] = useState<MainPageData | number[] >(MOCK_ARRAY_FOR_SKELETON_LOADER);

    useEffect(() => {
        API.getMainPageData()
            .then((data) => {
                setMainPageData(data as MainPageData);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={style['main-page_container']}>
            <Accent />
            <Banner
                link={ClothsGender.Woman}
                imgPath="/img/banner"
                title="Fall 2023"
                text="Street fashion collection"
                classMod={style['main-page_banner']}
            />
            {mainPageData.map((data, i) => {
                const objectKey = Object.keys(data)[0];
                return <ProductsPreviewList
                    title={objectKey}
                    link={ClothsGender.Woman}
                    products={typeof data === 'number' ? null : data[objectKey]}
                    key={i}
                />;
            })}
        </div>
    );
};

export { MainPage };
