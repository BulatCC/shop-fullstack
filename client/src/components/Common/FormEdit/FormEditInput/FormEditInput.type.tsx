import { ChangeEvent } from 'react';

export interface FormEditInputProps {
    id: string;
    defaultValue?: string;
    inputType?: string;
    name: string;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    register?: any;
    placeholder?: string;
    maxLength?: number;
}
