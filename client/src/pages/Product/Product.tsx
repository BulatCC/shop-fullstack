import { useState, useEffect } from 'react';
import { ProductSlider } from '../../components/Ui/ProductSlider/ProductSlider';
import { ProductDetails } from '../../components/Ui/ProductDetails/ProductDetails';
import { ProductsPreviewList } from '../../components/Ui/ProductsPreviewList/ProductsPreviewList';
import style from './Product.module.scss';
import { API } from '../../services/api';
import { ProductCard } from '../../types/ProductCard';

const Product = (): JSX.Element => {
    const [recomendData, setRecomendData] = useState<ProductCard[] | null>(null);
    useEffect(() => {
        API.getRecommendData()
            .then(data => setRecomendData(data as ProductCard[]))
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <section className={`${style.product} content`}>
                <div className={style.product_container}>
                    <ProductSlider />
                </div>
                <ProductDetails
                    title='Overalls'
                    description='Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front and back pockets.'
                    subTitle='Color' />
            </section>
            <ProductsPreviewList
                title='You may also like'
                link={'#'}
                products={recomendData} />
        </>
    );
};

export { Product };
