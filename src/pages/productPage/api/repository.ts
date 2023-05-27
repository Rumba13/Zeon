import { ICONS } from "../../../images/images";
import { ProductDto } from "../libs/dtos";

export default class ProductPageRepository {
    constructor() { }

    public async getProductById(id: number): Promise<ProductDto> {
        return await Promise.resolve({
            id: 88,
            title: "lerka",
            batch: "sdadd",
            guaranteeMonths: 12,
            manufacturer: "vlad",
            price: 1200,
            discountPrice: 1000,
            photos: [ICONS.slider1, ICONS.slider2, ICONS.slider3, ICONS.slider4],
            creditPriceInMonth: 15.5
        })
    }
}