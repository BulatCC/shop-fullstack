import { ImgProps } from './Img.types';

const Img = ({ imgPath, className, altText, width, height }: ImgProps): JSX.Element => {
    return (
        <picture>
            <img className={className}src={`${imgPath}.jpg`} srcSet={`${imgPath}@2x.jpg 2x`} alt={altText} width={width} height={height} />
        </picture>

    );
};

export { Img };
