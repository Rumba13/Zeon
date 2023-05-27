import { DefaultPageStateType } from "../model/model"

export type MiniProductDto = {
    id: number,
    previewImg: string,
    discountPrice: number,
    batch: string
    type: string,
    manufacturer: string,
}

export type AdvertisingBannerDto = {
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
    advertisingBanner: AdvertisingBannerDto
    products: MiniProductDto[]
}