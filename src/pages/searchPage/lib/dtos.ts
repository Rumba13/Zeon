export type SelectionTagDto = {
    title: string,
    link: string
}

export type SelectionProductDto = {
    type: string,
    manufacturer: string,
    batch: string
    code: number,
    characteristics: Object
    discountPrice: number,
    price: number,
    previewImage: string,
    deliveryDate: Date,
}

export type SelectionTitleDto = string;

export type PaginatorDto = {
    currentPage: number
    pagesCount: number
}