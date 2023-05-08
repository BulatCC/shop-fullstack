export interface BreadCrumbsProps {
    crumsbData: Array<{
        link: string;
        title: string;
        id: string;
    }>;
    classMod?: string;
};
