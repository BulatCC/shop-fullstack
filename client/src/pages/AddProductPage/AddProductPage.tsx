import { BreadCrumbs } from '../../components/Common/BreadCrumbs/BreadCrumbs';
import { AddProduct } from '../../components/Ui/AddProduct/AddProduct';

const AddProductPage = (): JSX.Element => {
    return (
        <div className='container'>
            <section className="content">
                <BreadCrumbs classMod='m-bottom'/>
                <AddProduct/>
            </section>
        </div>

    );
};

export { AddProductPage };
