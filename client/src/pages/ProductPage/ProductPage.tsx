import { useState, useEffect } from 'react';
import { ProductSlider } from '../../components/Ui/ProductSlider/ProductSlider';
import { ProductDetails } from '../../components/Ui/ProductDetails/ProductDetails';
import { ProductsPreviewList } from '../../components/Ui/ProductsPreviewList/ProductsPreviewList';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import style from './ProductPage.module.scss';
import { API } from '../../services/api/api';
import { ProductDataType } from '../../types/ProductData.type';
import { ClothsGender } from '../../constants';
import { useParams } from 'react-router-dom';
import { ProductDetailsData } from '../../components/Ui/ProductDetails/ProductDetails.type';
import { ProductPageChoice } from './ProductPage.type';
import { cartLocalStorage } from '../../services/localStorage/cartLocalStorage';
import { useAppDispatch } from '../../store/ReduxHooks';
import { addProductCart } from '../../store/AppState/AppState';

const ProductPage = (): JSX.Element => {
    const { productId } = useParams();
    const dispatch = useAppDispatch();
    const [productData, setProductData] = useState<ProductDetailsData | null>(null);
    const [sliderImages, setSliderImages] = useState<string[] | null>(null);
    const [selected, setSelected] = useState<ProductPageChoice>({
        color: '',
        size: ''
    });
    const [recommendData, setRecommendData] = useState<ProductDataType[] | null>(null);

    useEffect(() => {
        setSliderImages(null);
        setProductData(null);
        API.getRecommendData()
            .then(data => setRecommendData(data as ProductDataType[]))
            .catch(error => console.log(error));
        API.getProductById(productId as string)
            .then((data) => {
                setProductData(data as ProductDetailsData);
                setSliderImages(data.colors[0].images);
                setSelected({
                    color: data.colors[0].color,
                    size: Object.keys(data.colors[0].size)[0]
                });
            })
            .catch((error) => console.log(error));
    }, [productId]);

    useEffect(() => {
        const selectedData = productData?.colors.find(item => item.color === selected.color);
        if (selectedData) {
            setSliderImages(selectedData.images);
            setSelected({
                ...selected,
                size: Object.keys(selectedData.size)[0]
            });
        }
    }, [selected.color]);

    const handleChoice = (data: ProductPageChoice): void => {
        setSelected(data);
    };

    const handleAddToCart = (): void => {
        if (productData) {
            const selectedProduct = {
                selectedData: selected,
                productData: productData as ProductDataType
            };
            cartLocalStorage.setCartData(JSON.stringify(selectedProduct));
            dispatch(addProductCart(selectedProduct));
        }
    };

    return (
        <>
            <div className="container">
                <BreadCrumbs productName={productData?.title} />
            </div>
            <section className={`${style.product} content`}>
                <div className={style.product_container}>
                    <ProductSlider slides={sliderImages} />
                </div>
                <ProductDetails
                    data={productData}
                    colorTitle={'Color'}
                    sizeTitle={'Size'}
                    handleChoice={handleChoice}
                    handleAddToCart={handleAddToCart}
                    selected={selected}
                />
            </section>
            <ProductsPreviewList
                title="You may also like"
                link={`/${ClothsGender.Woman}`}
                products={recommendData}
            />
        </>
    );
};

export { ProductPage };
