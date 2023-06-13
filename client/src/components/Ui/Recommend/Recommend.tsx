import { ProductsPreviewList } from '../ProductsPreviewList/ProductsPreviewList';
import { ClothsGender } from '../../../constants';
import { RecommendProps } from './Recommend.type';
import { productsApi } from '../../../services/api/products.api';
import { useEffect, useState } from 'react';
import { ProductDataType } from '../../../types/ProductData.type';

const Recommend = ({ gender = ClothsGender.Woman }: RecommendProps): JSX.Element => {
    const [recommendData, setRecommendData] = useState<ProductDataType[] | null>(null);
    useEffect(() => {
        productsApi.recommend(gender)
            .then((data) => {
                setRecommendData(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <ProductsPreviewList
            title="You may also like"
            link={`/${gender}`}
            products={recommendData}
        />
    );
};

export { Recommend };
