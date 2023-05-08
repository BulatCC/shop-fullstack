import { useRef, useEffect } from 'react';
import { Navigation, Thumbs, Swiper } from 'swiper';
import { Img } from '../../Common/Img/Img';
import './ProductSlider.scss';

const screenWidth = document.documentElement.clientWidth;

const ProductSlider = (): JSX.Element => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const sliderPaginationRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const productSliderPagination = new Swiper(sliderPaginationRef.current as HTMLDivElement, {
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }
        });
        // eslint-disable-next-line
        new Swiper(sliderRef.current as HTMLDivElement, {
            modules: [Navigation, Thumbs],
            navigation: {
                nextEl: nextButtonRef.current,
                prevEl: prevButtonRef.current
            },
            thumbs: {
                swiper: screenWidth > 767 ? productSliderPagination : null
            },
            breakpoints: {
                768: {
                    navigation: {
                        nextEl: null,
                        prevEl: null
                    }
                },
                1366: {
                    navigation: {
                        nextEl: nextButtonRef.current,
                        prevEl: prevButtonRef.current
                    }
                }
            }
        });
    }, [sliderRef]);

    return (
        <>
            <div className="product-slider" ref={sliderRef}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Img imgPath='/img/slider-1' altText='Jacket' className='product-slider_img' width="244" height="310" />
                    </div>
                    <div className="swiper-slide">
                        <Img imgPath='/img/slider-2' altText='Jacket' className='product-slider_img' width="244" height="310" />
                    </div>
                    <div className="swiper-slide">
                        <Img imgPath='/img/slider-3' altText='Jacket' className='product-slider_img' width="244" height="310" />
                    </div>
                    <div className="swiper-slide">
                        <Img imgPath='/img/slider-4' altText='Jacket' className='product-slider_img' width="244" height="310" />
                    </div>
                    <div className="swiper-slide">
                        <Img imgPath='/img/slider-5' altText='Jacket' className='product-slider_img' width="244" height="310" />
                    </div>
                </div>
                <button className="product-slider_button product-slider_button--prev" type="button" ref={prevButtonRef}>
                    <img className="product-slider_icon" src="/img/svg/arrow-slider.svg" width="8" height="16" />
                </button>
                <button className="product-slider_button product-slider_button--next" type="button" ref={nextButtonRef}>
                    <img className="product-slider_icon" src="/img/svg/arrow-slider.svg" width="8" height="16" />
                </button>
            </div>
            {screenWidth > 767 &&
                <div className="product-slider_pagination" ref={sliderPaginationRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Img imgPath='/img/slider-1' altText='Jacket' className='product-slider_img' width="100" height="200" />
                        </div>
                        <div className="swiper-slide">
                            <Img imgPath='/img/slider-2' altText='Jacket' className='product-slider_img' width="100" height="200" />
                        </div>
                        <div className="swiper-slide">
                            <Img imgPath='/img/slider-3' altText='Jacket' className='product-slider_img' width="100" height="200" />
                        </div>
                        <div className="swiper-slide">
                            <Img imgPath='/img/slider-4' altText='Jacket' className='product-slider_img' width="100" height="200" />
                        </div>
                        <div className="swiper-slide">
                            <Img imgPath='/img/slider-5' altText='Jacket' className='product-slider_img' width="100" height="200" />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export { ProductSlider };
