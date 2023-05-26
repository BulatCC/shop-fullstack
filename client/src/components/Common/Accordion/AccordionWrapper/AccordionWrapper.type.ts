export interface AccordionWrapperProps {
    data: Array<{
        title: string;
        element: (key: number) => JSX.Element;
    }>;
}
