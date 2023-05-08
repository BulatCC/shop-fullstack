import { MouseEvent } from 'react';

export interface ChooseButtons {
    data: Array<{
        id: string;
        value: string;
    }>;
    name: string;
    onChange: (evt: MouseEvent<HTMLButtonElement>) => void;
    selected?: string;
    classMod?: string;
}
