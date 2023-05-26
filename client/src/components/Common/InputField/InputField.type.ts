import { ChangeEvent } from 'react';

export interface InputFieldProps {
    classMod?: string;
    placeholder?: string;
    id?: string;
    register?: any;
    inputType?: string;
    value?: string;
    name?: string;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}
