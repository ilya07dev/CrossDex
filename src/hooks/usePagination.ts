import { useState } from "react";

export const usePagination = (useGetTokens: () => any[] | string) => {
    const [currentPage, setCurrentPage] = useState(0);
    const tokens = useGetTokens();

    const itemsPerPage = 10;

    const handlePageChange = (selected: { selected: number }) => {
        setCurrentPage(selected.selected);
    };

    if(typeof tokens === 'string') return {
        items:tokens,
        pageCount:1,
        handlePageChange,
    }

    const pageCount = tokens
        ? Math.ceil(tokens.length / itemsPerPage)
        : 20;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTokens = tokens?.slice(startIndex, endIndex);

    

    return {
        items:currentTokens,
        pageCount,
        handlePageChange,
    }
}