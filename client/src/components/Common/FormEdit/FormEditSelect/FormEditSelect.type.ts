import { ChangeEvent } from 'react';

export interface FormEditSelectProps {
    name: string;
    id: string;
    children: JSX.Element[] | JSX.Element;
    defaultValue?: string;
    onChange?: (evt: ChangeEvent<HTMLSelectElement>) => void;
}
