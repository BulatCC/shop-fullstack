import { Navigation, Thumbs, SwiperOptions, Swiper } from 'swiper';
import { MutableRefObject } from 'react';

export const paginationOptions = {
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
};

export const sliderOptions = (
    nextButton: MutableRefObject<HTMLButtonElement>,
    prevButton: MutableRefObject<HTMLButtonElement>,
    screenWidth: number,
    paginationInstance: Swiper): SwiperOptions => {
    return {
        modules: [Navigation, Thumbs],
        navigation: {
            nextEl: nextButton?.current,
            prevEl: prevButton?.current
        },
        thumbs: {
            swiper: screenWidth > 767 ? paginationInstance : null
        },
        breakpoints: {
            768: {
                navigation: {
                    nextEl: null,
                    prevEl: null
                }
            },
            1200: {
                navigation: {
                    nextEl: nextButton?.current,
                    prevEl: prevButton?.current
                }
            }
        }
    };
};
