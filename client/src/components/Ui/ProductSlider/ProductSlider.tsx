import { ProductSliderComponent } from './ProductSliderComponent';
import { ProductSliderSkeleton } from './ProductSlider.skeleton';
import { ProductSliderProps } from './ProductSlider.type';

const screenWidth = document.documentElement.clientWidth;
const ProductSlider = ({ slides }: ProductSliderProps): JSX.Element => {
    return (
        <>
            {slides
                ? <ProductSliderComponent slides={slides} screenWidth={screenWidth} />
                : <ProductSliderSkeleton screenWidth={screenWidth}/>}
        </>
    );
};

export { ProductSlider };
