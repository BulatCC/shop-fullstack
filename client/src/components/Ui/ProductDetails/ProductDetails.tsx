import { ProductDetailsComponent } from './ProductDetailsComponent';
import { ProductDetailsSkeleton } from './ProductDetails.skeleton';
import { ProductDetailsProps } from './ProductDetails.type';

const ProductDetails = ({ data, sizeTitle, colorTitle, handleChoice, selected, handleAddToCart }: ProductDetailsProps): JSX.Element => {
    return (
        <>
            { data
                ? <ProductDetailsComponent
                    data={data}
                    colorTitle={colorTitle}
                    sizeTitle={sizeTitle}
                    handleChoice={handleChoice}
                    selected={selected}
                    handleAddToCart={handleAddToCart}
                />
                : <ProductDetailsSkeleton/> }
        </>
    );
};

export { ProductDetails };
