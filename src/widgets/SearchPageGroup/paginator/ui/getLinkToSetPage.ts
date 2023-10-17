export function getLinkToSetPage(page: number, pagesCount: number) {
    if (typeof page === "number" && page > 0 && page <= pagesCount) {
        const pageUrl = new URL(location.href);

        pageUrl.searchParams.delete("page");
        pageUrl.searchParams.set("page", page.toString());

        return pageUrl.pathname + pageUrl.search;
    }
    throw new Error("current page index out of pages count or current page is not a number")
}