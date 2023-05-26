export interface PaginationProps {
    pageDataCount: number;
    pageSize: number;
    handleChange: (pageNumber: number) => void;
    currentPage?: number;
}
