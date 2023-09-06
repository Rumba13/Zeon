import { MiniProductDto, BannerDto, ProductSelectionDto, SliderItemDto } from "../libs/dtos";
import { serverConnection } from "../../../shared/api/serverConnection";

export class Service {
    constructor() { }

    public async loadDefaultProducts(): Promise<MiniProductDto[]> {
        const products: MiniProductDto[] = (await serverConnection.get("/reccomended-products")).data;
        return products;
    }
    public async loadAdvertisingBanner(): Promise<BannerDto> {
        const advertisingBanner = await (await serverConnection.get("/advertising-banner")).data;
        return advertisingBanner;
    }
    public async loadProductSelections(): Promise<ProductSelectionDto[]> {
        const selections: ProductSelectionDto[] = (await serverConnection.get("/reccomended-product-categories")).data;
        return selections;
    }
    public async getSliderItems(): Promise<SliderItemDto[]> {
        const sliderItems:string[] = (await serverConnection.get("/home-page-slider")).data;
        return sliderItems;
    }
}