export type MiniProductDto = {
    id: number,
    previewImg: string,
    discountPrice: number,
    batch: string
    type: string,
    manufacturer: string,
}

export type BannerDto = {
    img: string,
    href: string
}

export type ProductSelectionDto = {
    href: string,
    title: string,
    img: string
}

export type DefaultPageDto = {
    productSelections: ProductSelectionDto[]
    advertisingBanner: BannerDto
    products: MiniProductDto[]
}

export type SliderItemDto = string;