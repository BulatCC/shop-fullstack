import { useState, useEffect } from 'react';
import { ProductSlider } from '../../components/Ui/ProductSlider/ProductSlider';
import { ProductDetails } from '../../components/Ui/ProductDetails/ProductDetails';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { Recommend } from '../../components/Ui/Recommend/Recommend';
import style from './ProductPage.module.scss';
import { productsApi } from '../../services/api/products.api';
import { ProductDataType } from '../../types/ProductData.type';
import { useParams } from 'react-router-dom';
import { ProductPageChoice } from './ProductPage.type';
import { cartLocalStorage } from '../../services/localStorage/cartLocalStorage/cartLocalStorage';
import { useAppDispatch } from '../../store/reduxHooks';
import { addProductCart } from '../../store/cart/cart';
import { toast } from 'react-toastify';

const ProductPage = (): JSX.Element => {
    const { productId, gender } = useParams();
    const dispatch = useAppDispatch();
    const [productData, setProductData] = useState<ProductDataType | null>(null);
    const [sliderImages, setSliderImages] = useState<string[] | null>(null);
    const [selected, setSelected] = useState<ProductPageChoice>({
        color: '',
        size: ''
    });

    useEffect(() => {
        setSliderImages(null);
        setProductData(null);
        productsApi.productById(productId as string)
            .then((data) => {
                setProductData(data);
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

    const addProduct = (productsAmount: number, showToast: boolean): void => {
        if (productData) {
            const selectedData = {
                ...selected
            };

            const selectedProduct = {
                selectedData,
                productData
            };

            cartLocalStorage.setCartData(JSON.stringify(selectedProduct));
            dispatch(addProductCart(selectedProduct));
            showToast && toast('Added to cart');
        }
    };

    const handleAddToCart = (): void => {
        addProduct(1, true);
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
            <Recommend gender={gender}/>
        </>
    );
};

export { ProductPage };
