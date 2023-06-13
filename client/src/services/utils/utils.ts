import { ColorsDataType } from '../../types/ProductData.type';
import { FormEvent } from 'react';
import { SliderSubmitData } from '../../pages/EditProductPage/EditProductPage.type';
import { toast } from 'react-toastify';
import axios from 'axios';

export const getColorsData = (colors: ColorsDataType[]): string[] => {
    return colors.reduce((acc: string[], { color }) => {
        acc.push(color);
        return acc;
    }, []);
};

export const checkScrollPosition = (): boolean => {
    const documentHeight = document.documentElement.scrollHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = screenHeight / 3;
    const position = documentHeight - scrolled - screenHeight;
    return position <= threshold;
};

export const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const formData = new FormData(evt.target as HTMLFormElement);
    const submitData: SliderSubmitData = {
        sliderImages: [],
        formData: {}
    };

    for (const [name, value] of formData) {
        if (name === 'sliderImages' && value instanceof File && value.name !== '') {
            submitData.sliderImages.push({ [name]: value });
        } else {
            submitData.formData = {
                ...submitData.formData,
                [name]: value
            };
        }
    }
};
