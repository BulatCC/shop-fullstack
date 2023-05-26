import { FormEvent } from 'react';

export interface FormEditProps {
    children: JSX.Element[] | JSX.Element;
    onSubmit?: (evt: FormEvent<HTMLFormElement>) => void;
    classMod?: string;
}
