import { ChangeEvent } from 'react';

export interface FormInputProps {
    label: string;
    id: string;
    errorText?: string;
    isError?: boolean;
    inputType?: string;
    value?: string;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
    register?: any;
    name?: string;
}
