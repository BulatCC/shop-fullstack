import { MouseEvent } from 'react';

export interface ButtonChooseProps {
    data: Array<{
        id: string;
        value: string;
    }>;
    name: string;
    onChange: (evt: MouseEvent<HTMLButtonElement>) => void;
    selected?: string;
    classMod?: string;
}
