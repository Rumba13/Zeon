export type SearchTagDto = {
    title: string,
    link: string
}

export type SearchProductDto = {
    type: string,
    manufacturer: string,
    batch: string
    id: number,
    characteristics: Object
    discountPrice: number,
    price: number,
    previewImage: string,
    deliveryDate: Date,
}

export type SearchPageTitleDto = string;

export type PaginatorDto = {
    currentPage: number
    pagesCount: number
}