
export interface ColorsDataType {
    color: string;
    images: string[];
    size: {
        [key: string]: {
            title: string;
            value: string;
        };
    };
}
export interface ProductDataType {
    _id: string;
    img: string;
    title: string;
    price: number;
    productType: string;
    bestSeller: boolean;
    gender: string;
    colors: ColorsDataType[];
    collectionName: string;
    description: string;
}
