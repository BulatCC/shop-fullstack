import { ProductSliderSkeletonProps } from './ProductSlider.type';
import './ProductSlider.scss';
const ProductSliderSkeleton = ({ screenWidth }: ProductSliderSkeletonProps): JSX.Element => {
    return (
        <>
            <div className="product-slider">
                <div className="swiper-wrapper skeleton"/>
            </div>
            {screenWidth > 767 &&
                <div className="product-slider_pagination skeleton"/>
            }
        </>
    );
};

export { ProductSliderSkeleton };
