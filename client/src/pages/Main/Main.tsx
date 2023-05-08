import { useState, useEffect } from 'react';
import { Accent } from '../../components/Ui/Accent/Accent';
import { ProductsPreviewList } from '../../components/Ui/ProductsPreviewList/ProductsPreviewList';
import { Banner } from '../../components/Ui/Banner/Banner';
import { AppRoute } from '../../Consts';
import { API } from '../../services/api';
import { ProductCard } from '../../types/ProductCard';

const Main = (): JSX.Element => {
    const [data, setData] = useState<Record<string, ProductCard[]> | null>(null);
    useEffect(() => {
        API.getMainData()
            .then((data) => setData(data as Record<string, ProductCard[]>))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Accent />
            <ProductsPreviewList
                title="Bestsellers"
                link={AppRoute.Catalog}
                products={data?.bestSellers}
                anchor="scroll-down"
            />
            <ProductsPreviewList
                title="Jeans"
                link={AppRoute.Catalog}
                products={data?.jeans}
            />
            <ProductsPreviewList
                title="Overalls"
                link={AppRoute.Catalog}
                products={data?.overalls}
            />
            <Banner
                link={AppRoute.Catalog}
                imgPath="/img/banner"
                title="Fall 2023"
                text="Street fashion collection"
            />
            <ProductsPreviewList
                title="Jackets"
                link={AppRoute.Catalog}
                products={data?.jackets}
            />
            <ProductsPreviewList
                title="Shirts"
                link={AppRoute.Catalog}
                products={data?.shirts}
            />
        </>
    );
};

export { Main };
