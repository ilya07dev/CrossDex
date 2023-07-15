import { useState } from "react";

export const usePagination = (useGetTokens: () => any[]) => {
    const [currentPage, setCurrentPage] = useState(0);
    const tokens = useGetTokens();

    const itemsPerPage = 10;

    const pageCount = tokens
        ? Math.ceil(tokens.length / itemsPerPage)
        : 20;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTokens = tokens?.slice(startIndex, endIndex);

    const handlePageChange = (selected: { selected: number }) => {
        setCurrentPage(selected.selected);
    };

    return {
        items:currentTokens,
        pageCount,
        handlePageChange,
    }
}