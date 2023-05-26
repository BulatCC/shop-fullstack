import { ChangeEvent } from 'react';

export interface FormEditInputProps {
    id: string;
    defaultValue?: string;
    name: string;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    register?: any;
}
