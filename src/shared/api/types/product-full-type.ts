export type ProductFullType = {
    id: number,
    type:string,
    manufacturer: string,
    batch: string,
    price: number,
    discountPrice: number,
    photos: string[],
    guaranteeMonths: number,
    creditPricePerMonth:number,
    rating:number,
    characteristics: Object,
    deliveryDate:Date
}