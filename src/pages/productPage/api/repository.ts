import { ICONS } from "../../../images/images";
import { ProductDto } from "../libs/dtos";

export class Repository {
    constructor() { }

    public async loadProduct(id: number): Promise<ProductDto> {
        return await Promise.resolve({
            type: "lerkaType",
            id: 88,
            title: "lerka",
            batch: "sdadd",
            guaranteeMonths: 12,
            manufacturer: "vlad",
            price: 1200,
            discountPrice: 1000,
            photos: [ICONS.slider1, ICONS.slider2, ICONS.slider3, ICONS.slider4],
            creditPricePerMonth: 15.5,
            characteristic: {},
            rating: 5
        })
    }
}