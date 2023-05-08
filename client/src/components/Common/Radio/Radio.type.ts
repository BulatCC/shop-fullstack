import { ChangeEvent } from 'react';

export interface RadioProps {
    data: Array<{
        id: string;
        value: string;
        color?: string;
    }>;
    name: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    classMod?: string;
    checked?: string;
};
