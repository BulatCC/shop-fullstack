export interface FilterCatalogProps {
    classMod?: string;
}

export type FilterCatalogData = Record<string, string[]> | null;

export type FilterCatalogAccordionData = Array<{
    title: string;
    element: (key: number) => JSX.Element;
}>;
