export function getLinkToSetPage(page: number, pagesCount: number) {
    if (typeof page === "number" && page > 0 && page <= pagesCount) {
        return `/search/${page}`;
    }
    
    return "";
}