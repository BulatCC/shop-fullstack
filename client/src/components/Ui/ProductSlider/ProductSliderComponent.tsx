import { useRef, useEffect, MutableRefObject } from 'react';
import { Swiper } from 'swiper';
import './ProductSlider.scss';
import { paginationOptions, sliderOptions } from './ProductSlider.options';
import { ProductSliderComponentProps } from './ProductSlider.type';

const ProductSliderComponent = ({ slides, screenWidth }: ProductSliderComponentProps): JSX.Element => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const sliderPaginationRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const productSliderPagination = new Swiper(sliderPaginationRef.current as HTMLDivElement,
            paginationOptions
        );
        // eslint-disable-next-line
        new Swiper(sliderRef.current as HTMLDivElement, sliderOptions(
            nextButtonRef as MutableRefObject<HTMLButtonElement>,
            prevButtonRef as MutableRefObject<HTMLButtonElement>,
            screenWidth,
            productSliderPagination));
    }, [slides]);

    return (
        <>
            <div className="product-slider" ref={sliderRef}>
                <div className="swiper-wrapper">
                    {slides?.map((slide, i) => (
                        <div key={slide + i.toString()} className="swiper-slide">
                            <img src={slide} alt='Jacket' className='product-slider_img' width="244" height="310" />
                        </div>
                    ))}
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
                        {slides?.map((slide, i) => (
                            <div className="swiper-slide" key={slide + i.toString()}>
                                <img src={slide} alt='Jacket' className='product-slider_img' width="100" height="200" />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
};

export { ProductSliderComponent };
