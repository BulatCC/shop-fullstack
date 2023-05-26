import { ProductsPreviewListProps } from './ProductsPreviewList.type';
import { ProductList } from '../ProductList/ProductList';
import { Link } from 'react-router-dom';

const ProductsPreviewList = ({ title, link, products }: ProductsPreviewListProps): JSX.Element => {
    const screenWidth = document.documentElement.clientWidth;
    return (
        <section className="content">
            <div className="container">
                <div className="title-container">
                    <h2 className="title">{title}</h2>
                    {screenWidth > 767 && <a className="link" href={link}>View all</a>}
                </div>
                <ProductList products={products} skeletonNumber={4} />
                {screenWidth < 768 && <div className="link-container">
                    <Link className='link' to={link}>View all</Link>
                </div>}
            </div>
        </section>
    );
};

export { ProductsPreviewList };
