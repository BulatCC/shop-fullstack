import { ChangeEvent, MouseEvent } from 'react';
import { SortButtons } from '../../Common/SortButtons/SortButtons';
import { Radio } from '../../Common/Radio/Radio';
import { ProductDetailsComponentProps, SizeType } from './ProductDetails.type';
import { ColorsDataType } from '../../../types/ProductData.type';
import style from './ProductDetails.module.scss';
import { getColorsData } from '../../../services/utils/utils';

const ProductDetailsComponent = ({
    data: { title, description, colors, price },
    colorTitle,
    sizeTitle,
    selected,
    handleChoice,
    handleAddToCart
}: ProductDetailsComponentProps): JSX.Element => {
    const colorsData = getColorsData(colors);

    const getSizeData = (): SizeType[] => {
        const sizeData = colors.find(({ color }) => color === selected.color
        ) as ColorsDataType;

        return Object.values(sizeData.size);
    };

    const sizeData = getSizeData();

    const handleChange = (evt: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>): void => {
        const { value, name } = evt.target as HTMLButtonElement;
        handleChoice({
            ...selected,
            [name]: value
        });
    };

    return (
        <div className={style['product-details_description']}>
            <div className={style['product-details_container']}>
                <ul className={style['product-details_list']}>
                    <li className={style['product-details_item']}>
                        <h2 className={`${style['product-details_title']} title`}>
                            {title}
                        </h2>
                        <p className={style['product-details_text']}>{description}</p>
                    </li>
                    <li className={style['product-details_item']}>
                        <h3 className={style['product-details_sub-title']}>{colorTitle}</h3>
                        <Radio
                            data={colorsData}
                            classMod={style['product-details_radio']}
                            name="color"
                            checked={selected.color}
                            onChange={handleChange}
                        />
                    </li>
                    <li className={style['product-details_item']}>
                        <h3 className={style['product-details_sub-title']}>{sizeTitle}</h3>
                        <SortButtons
                            data={sizeData}
                            name="size"
                            onChange={handleChange}
                            selected={selected.size}
                        />
                    </li>
                </ul>
                <p className={style['product-details_price']}>$ {price}</p>
                <button
                    className={`${style['product-details_button']} button`}
                    type="button"
                    onClick={handleAddToCart}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export { ProductDetailsComponent };
