import { MiniProductDto, BannerDto, ProductSelectionDto, DefaultPageDto, SliderItemDto } from "../libs/dtos";
import { Repository } from "./repository";

export class Service {
    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    public async loadDefaultProducts(): Promise<MiniProductDto[]> {
        return await this.repository.loadDefaultProducts();
    }
    public async loadAdvertisingBanner(): Promise<BannerDto> {
        return await this.repository.loadAdvertisingBanner();
    }
    public async loadProductSelections(): Promise<ProductSelectionDto[]> {
        return await this.repository.loadProductSelections();
    }
    public async loadDefaultPageData(): Promise<DefaultPageDto> {
        const products = await this.repository.loadDefaultProducts();
        const advertisingBanner = await this.repository.loadAdvertisingBanner();
        const productSelections = await this.repository.loadProductSelections();

        return {
            advertisingBanner,
            productSelections,
            products,
        }
    }
    public async getSliderItems(): Promise<SliderItemDto[]> {
        return await this.repository.loadSliderItems()
    }
}