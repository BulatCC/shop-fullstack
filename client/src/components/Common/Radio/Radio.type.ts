import { ChangeEvent } from 'react';

export interface RadioProps {
    data: string[];
    name: string;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
    classMod?: string;
    checked?: string;
}
