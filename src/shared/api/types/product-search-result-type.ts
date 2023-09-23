export type ProductSearchResultType = {
    id: number,
    type: string,
    manufacturer: string,
    batch: string
    price: number,
    discountPrice: number,
    characteristics: Object
    previewImage: string,
    deliveryDate: Date,
}