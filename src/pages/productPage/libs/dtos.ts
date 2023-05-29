export type ProductDto  = {
    type:string,
    title: string,
    id: number,
    price: number,
    discountPrice: number,
    photos: string[],
    manufacturer: string,
    batch: string,
    guaranteeMonths: number,
    creditPricePerMonth:number
}