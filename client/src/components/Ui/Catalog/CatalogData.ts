import { ClothsGender, SortType, ProductType } from '../../../constants';

export const sortByData = [SortType.Popular, SortType.HighToLow, SortType.LowToHigh];
export const productTypeData = [ProductType.Jacket, ProductType.Jeans, ProductType.Shirt];

export const genderData = [
    {
        id: '1',
        value: ClothsGender.Woman
    },
    {
        id: '2',
        value: ClothsGender.Man
    }
];
