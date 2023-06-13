import { MouseEvent } from 'react';

export interface SortButtonsProps {
    data: Array<{
        title: string;
        value: string | number;
    }>;
    name: string;
    onChange: (evt: MouseEvent<HTMLButtonElement>) => void;
    selected?: string;
    classMod?: string;
    setActiveByTitle?: boolean;
}
