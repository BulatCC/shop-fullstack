import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { EditProduct } from '../../components/Ui/EditProduct/EditProduct';
import { useParams } from 'react-router-dom';
import { mockAPI } from '../../services/api/api';
import { ProductDataType } from '../../types/ProductData.type';

const EditProductPage = (): JSX.Element => {
    const { editProductId } = useParams();
    const [formData, setFormData] = useState<ProductDataType>();

    useEffect(() => {
        mockAPI.getProductById(editProductId as string)
            .then((data) => {
                setFormData(data as ProductDataType);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='container'>
            <section className='content'>
                <BreadCrumbs productName={formData?.title} classMod='m-bottom' />
                <h1 className='m-bottom'>Edit product</h1>
                {formData
                    ? <EditProduct formData={formData}/>
                    : 'Loading...'}
            </section>
        </div>
    );
};

export { EditProductPage };
