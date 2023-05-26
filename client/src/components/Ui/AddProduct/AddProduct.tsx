import { FormEdit } from '../../Common/FormEdit/FormEdit/FormEdit';
import { FormEditLabel } from '../../Common/FormEdit/FormEditLabel/FormEditLabel';
import { FormEditInput } from '../../Common/FormEdit/FormEditInput/FormEditInput';
import { FormEditSelect } from '../../Common/FormEdit/FormEditSelect/FormEditSelect';
import { All_SIZES, ClothsGender, Collection } from '../../../constants';
import { FormEdiTextArea } from '../../Common/FormEdit/FormEdiTextArea/FormEdiTextArea';
import style from './AddProduct.module.scss';
import { handleFormSubmit } from '../../../services/utils/utils';

const AddProduct = (): JSX.Element => {
    return (
        <>
            <h1 className='m-bottom'>AddProduct</h1>
            <FormEdit onSubmit={handleFormSubmit} >
                <FormEditLabel idFor={'title'}>Title</FormEditLabel>
                <FormEditInput id={'title'} name={'title'} required={true} />

                <FormEditLabel idFor={'previewImage'}>Preview image (jpeg, jpg, png)</FormEditLabel>
                <input type="file" id='previewImage' name='previewImage' accept='image/png, image/jpeg' required={true}/>

                <FormEditLabel idFor={'productType'}>Product Type</FormEditLabel>
                <FormEditInput id={'productType'} name={'productType'} required={true} />

                <FormEditLabel idFor={'price'}>Price</FormEditLabel>
                <FormEditInput id={'price'} name={'price'} inputType='number' required={true} />

                <FormEditLabel idFor={'gender'}>Gender</FormEditLabel>
                <FormEditSelect name='gender' id='gender' defaultValue={ClothsGender.Man} >
                    <option value={ClothsGender.Man}>{ClothsGender.Man}</option>
                    <option value={ClothsGender.Woman}>{ClothsGender.Woman}</option>
                </FormEditSelect>

                <FormEditLabel idFor={'description'}>Description</FormEditLabel>
                <FormEdiTextArea name='description' id='description' required={true} />

                <FormEditLabel idFor={'collection'}>Collection</FormEditLabel>
                <FormEditSelect name='collection' id='collection' defaultValue={Collection.Casual} >
                    <option value={Collection.Casual}>{Collection.Casual}</option>
                    <option value={Collection.Classic}>{Collection.Classic}</option>
                </FormEditSelect>

                <FormEditLabel idFor={'color'}>New color</FormEditLabel>
                <FormEditInput id={'color'} name={'color'} required={true} placeholder='#000000' maxLength={7}/>

                <FormEditLabel>Size</FormEditLabel>
                <div className={style['edit-product_inputs-wrap']}>
                    <FormEditSelect name='size' id='size' >
                        {All_SIZES.map((value, i) => {
                            return <option value={value} key={value}>{value}</option>;
                        })}
                    </FormEditSelect>
                    <p>Enter quantity:</p>
                    <FormEditInput id={'sizeCount'} name={'sizeCount'} inputType='number' required={true} />
                </div>

                <FormEditLabel idFor={'sliderImages'}>Slider images (jpeg, jpg, png)</FormEditLabel>
                <input type="file" id='sliderImages' name='sliderImages' accept='image/png, image/jpeg' multiple={true} required={true}/>

                <button className='button m-top'>Send</button>
            </FormEdit>
        </>

    );
};

export { AddProduct };
