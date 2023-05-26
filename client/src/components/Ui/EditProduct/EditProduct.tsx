import { EditProductProps } from './EditProduct.type';
import { FormEdit } from '../../Common/FormEdit/FormEdit/FormEdit';
import { FormEditLabel } from '../../Common/FormEdit/FormEditLabel/FormEditLabel';
import { FormEditInput } from '../../Common/FormEdit/FormEditInput/FormEditInput';
import { FormEditSelect } from '../../Common/FormEdit/FormEditSelect/FormEditSelect';
import { FormEdiTextArea } from '../../Common/FormEdit/FormEdiTextArea/FormEdiTextArea';
import { All_SIZES, ClothsGender, Collection } from '../../../constants';
import style from './EditProduct.module.scss';
import { Radio } from '../../Common/Radio/Radio';
import { getColorsData, handleFormSubmit } from '../../../services/utils/utils';
import { ChangeEvent, useEffect, useState } from 'react';
import { ColorsDataType } from '../../../types/ProductData.type';
import { SizeData } from '../../../pages/EditProductPage/EditProductPage.type';

const EditProduct = ({ formData }: EditProductProps): JSX.Element => {
    const [colorsData, setColorsData] = useState<ColorsDataType>();
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<SizeData>({
        name: '',
        count: ''
    });
    const [addNewColor, setAddNewColor] = useState<boolean>(false);

    useEffect(() => {
        setSelectedColor(formData.colors[0].color);
    }, []);

    useEffect(() => {
        const sizeData = getSizeData();
        setColorsData(sizeData);
        setSelectedSize({
            name: All_SIZES[0],
            count: sizeData?.size[All_SIZES[0]] ?? '0'
        });
    }, [selectedColor]);

    const getSizeData = (): ColorsDataType => {
        return formData?.colors.find(({ color }) => color === selectedColor) as ColorsDataType;
    };

    const handleColorClick = (evt: ChangeEvent<HTMLInputElement>): void => {
        setSelectedColor(evt.target.value);
    };

    const handleSizeChoose = (evt: ChangeEvent<HTMLSelectElement>): void => {
        const { value } = evt.target;
        setSelectedSize({
            name: value,
            count: colorsData?.size[value] ?? '0'
        });
    };

    const handleAddColor = (): void => {
        setAddNewColor(!addNewColor);
    };

    return (
        <>
            <FormEdit onSubmit={handleFormSubmit} >
                <FormEditLabel idFor={'title'}>Title</FormEditLabel>
                <FormEditInput id={'title'} name={'title'} defaultValue={formData.title} required={true} />

                <FormEditLabel idFor={'previewImage'}>Preview image (jpeg, jpg, png)</FormEditLabel>
                <input type="file" id='previewImage' name='previewImage' accept='image/png, image/jpeg'/>

                <FormEditLabel idFor={'productType'}>Product Type</FormEditLabel>
                <FormEditInput id={'productType'} name={'productType'} defaultValue={formData.productType} required={true} />

                <FormEditLabel idFor={'price'}>Price</FormEditLabel>
                <FormEditInput id={'price'} name={'price'} inputType='number' defaultValue={formData.price} required={true} />

                <FormEditLabel idFor={'gender'}>Gender</FormEditLabel>
                <FormEditSelect name='gender' id='gender' defaultValue={formData.gender} >
                    <option value={ClothsGender.Man}>{ClothsGender.Man}</option>
                    <option value={ClothsGender.Woman}>{ClothsGender.Woman}</option>
                </FormEditSelect>

                <FormEditLabel idFor={'description'}>Description</FormEditLabel>
                <FormEdiTextArea name='description' id='description' required={true} defaultValue={formData.description} />

                <FormEditLabel idFor={'collection'}>Collection</FormEditLabel>
                <FormEditSelect name='collection' id='collection' defaultValue={formData.collection} >
                    <option value={Collection.Casual}>{Collection.Casual}</option>
                    <option value={Collection.Classic}>{Collection.Classic}</option>
                </FormEditSelect>

                {!addNewColor
                    ? <>
                        <FormEditLabel>Color</FormEditLabel>
                        <div className={style['edit-product_inputs-wrap']}>
                            <Radio name='color' data={getColorsData(formData.colors)} onChange={handleColorClick} checked={selectedColor} />
                            <button className='button button--small' type='button' onClick={handleAddColor}>add new color</button>
                        </div>
                    </>
                    : <>
                        <FormEditLabel idFor={'color'}>New color</FormEditLabel>
                        <FormEditInput id={'color'} name={'color'} required={true} placeholder='#000000' maxLength={7}/>
                    </>
                }

                <FormEditLabel>Size</FormEditLabel>
                <div className={style['edit-product_inputs-wrap']}>
                    {colorsData && !addNewColor
                        ? <>
                            <FormEditSelect name='size' id='size' onChange={handleSizeChoose}>
                                {All_SIZES.map((value, i) => {
                                    return <option value={value} key={value}>{`${value} - ${colorsData.size[value] ?? '0'} `}</option>;
                                })}
                            </FormEditSelect>
                            <p>Enter quantity:</p>
                            <FormEditInput id={'sizeCount'} name={'sizeCount'} inputType='number' defaultValue={selectedSize.count} required={true} key={selectedSize.count} />
                        </>
                        : <>
                            <FormEditSelect name='size' id='size' >
                                {All_SIZES.map((value, i) => {
                                    return <option value={value} key={value}>{value}</option>;
                                })}
                            </FormEditSelect>
                            <p>Enter quantity:</p>
                            <FormEditInput id={'sizeCount'} name={'sizeCount'} inputType='number' required={true} />
                        </>
                    }
                </div>

                <FormEditLabel idFor={'sliderImages'}>Slider images (jpeg, jpg, png)</FormEditLabel>
                <div className={style['edit-product_inputs-wrap']}>
                    <input type="file" id='sliderImages' name='sliderImages' accept='image/png, image/jpeg' multiple={true} key={selectedColor}/>
                    <input type="checkbox" id='removeOldSliderImg' name='removeOldSliderImg' />
                    <label htmlFor='removeOldSliderImg'>remove old images</label>
                </div>

                <button className='button m-top'>Send</button>
            </FormEdit>
        </>
    );
};

export { EditProduct };
