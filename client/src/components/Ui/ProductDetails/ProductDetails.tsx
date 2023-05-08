import { useState, ChangeEvent, MouseEvent } from 'react';
import { SortButtons } from '../../Common/SortButtons/SortButtons';
import { Radio } from '../../Common/Radio/Radio';
import { ProductDetailsProps } from './ProductDetails.type';
import style from './ProductDetails.module.scss';

const radioData = [
    {
        id: '#B0C3C7',
        value: '#B0C3C7',
        color: '#B0C3C7'
    },
    {
        id: '#3B6392',
        value: '#3B6392',
        color: '#3B6392'
    },
    {
        id: '#2D2E2E',
        value: '#2D2E2E',
        color: '#2D2E2E'
    }
];

const sortData = [
    {
        id: '1',
        value: 'XS'
    },
    {
        id: '2',
        value: 'S'
    },
    {
        id: '3',
        value: 'M'
    },
    {
        id: '4',
        value: 'L'
    },
    {
        id: '5',
        value: 'XL'
    }
];

const ProductDetails = ({ title, description, subTitle }: ProductDetailsProps): JSX.Element => {
    const [productData, setProductData] = useState({
        color: '#B0C3C7',
        size: 'XS'
    });

    const handleChange = (evt: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>): void => {
        const { value, name } = evt.target as HTMLButtonElement;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    return (
        <div className={style['product-details_description']}>
            <div className={style['product-details_container']}>
                <ul className={style['product-details_list']}>
                    <li className={style['product-details_item']}>
                        <h2 className={`${style['product-details_title']} title`}>{title}</h2>
                        <p className={style['product-details_text']}>{description}</p>
                    </li>
                    <li className={style['product-details_item']}>
                        <h3 className={style['product-details_sub-title']}>{subTitle}</h3>
                        <Radio
                            data={radioData}
                            classMod={style['product-details_radio']}
                            name='color'
                            checked={productData.color}
                            onChange={handleChange}
                        />
                    </li>
                    <li className={style['product-details_item']}>
                        <h3 className={style['product-details_sub-title']}>Size</h3>
                        <SortButtons
                            data={sortData}
                            name='size'
                            onChange={handleChange}
                            selected={productData.size}
                        />
                    </li>
                </ul>
                <p className={style['product-details_price']}>$ 160</p>
                <button className={`${style['product-details_button']} button`} type="button">Add to cart</button>
            </div>
        </div>
    );
};

export { ProductDetails };
