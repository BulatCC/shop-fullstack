import { MouseEvent } from 'react';

export interface SortButtonsProps {
    data: string[];
    name: string;
    onChange: (evt: MouseEvent<HTMLButtonElement>) => void;
    selected?: string;
    classMod?: string;
}
