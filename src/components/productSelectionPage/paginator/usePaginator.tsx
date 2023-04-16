import { useState } from "react";

export type PageNumberType = (number | "...")

class PagesController {
    constructor() { }

    private getFirstPaginatorPageNumbers(pageCount: number) {
        const paginatorNumbers = [];

        for (let pageNumber = 1; pageNumber <= 3; pageNumber++) {
            if (pageNumber <= pageCount) { //if page exists show it
                paginatorNumbers.push(pageNumber)
            }
        }

        return paginatorNumbers;
    }
    private getFirstMidPaginatorPageNumbers(currentPage: number) {
        const paginatorNumbers = [];

        for (let pageNumber = currentPage - 3; pageNumber < currentPage; pageNumber++) {
            if (pageNumber > 0) { //if page exists show it
                paginatorNumbers.push(pageNumber)
            }
        }

        return paginatorNumbers;
    }
    private getLastMidPaginatorPageNumbers(currentPage: number, pageCount: number) {
        const paginatorNumbers = [];

        for (let pageNumber = currentPage + 1; pageNumber <= currentPage + 3; pageNumber++) {
            if (pageNumber < pageCount) { //if page exists show it
                paginatorNumbers.push(pageNumber)
            }
        }

        return paginatorNumbers;
    }
    private getLastPaginatorPageNumbers(pageCount: number) {
        const paginatorNumbers = [];

        for (let pageNumber = pageCount - 2; pageNumber <= pageCount; pageNumber++) {
            paginatorNumbers.push(pageNumber);
        }

        return paginatorNumbers;
    }
    public removeDuplicates(paginatorNumbers: number[]): number[] {
        paginatorNumbers.sort((a, b) => a - b);

        return paginatorNumbers.filter((currentPage, pageIndex, pages) => {
            const nextPage = pages[pageIndex + 1];
            return currentPage !== nextPage;
        })

    }
    public getPagesNumbers(currentPage: number, pageCount: number): number[] {
        let pages: any[] = [
            ...this.getFirstPaginatorPageNumbers(pageCount),
            ...this.getFirstMidPaginatorPageNumbers(currentPage),
            ...this.getLastMidPaginatorPageNumbers(currentPage, pageCount),
            ...this.getLastPaginatorPageNumbers(pageCount)
        ];

        pages = this.removeDuplicates(pages);
        pages = this.addEllipsis(pages);

        return pages;
    }
    public addEllipsis(paginatorNumbers: number[]): PageNumberType[] {
        const paginatorItems: PageNumberType[] = [];

        paginatorNumbers.forEach((currentPage, pageIndex, pages) => {
            const nextPage = pages[pageIndex + 1];

            paginatorItems.push(currentPage);

            if (currentPage !== nextPage - 1 && nextPage !== undefined) {
                paginatorItems.push("...");
            }
        })

        return paginatorItems;
    }
}

export function usePaginator() {
    const [currentPage, setCurrentPage] = useState<number>(3);
    const [pageCount, setPageCount] = useState<number>(41);

    const pagesController = new PagesController();
    const pages = pagesController.getPagesNumbers(currentPage, pageCount);

    return { pages, currentPage }
}