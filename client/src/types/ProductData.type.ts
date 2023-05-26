
export interface ColorsDataType {
    color: string;
    images: string[];
    size: {
        [key: string]: string;
    };
}
export interface ProductDataType {
    id: string;
    img: string;
    title: string;
    price: string;
    productType: string;
    bestSeller: boolean;
    gender: string;
    colors: ColorsDataType[];
    collection: string;
    description: string;
}
