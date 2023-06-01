import { MiniProductDto, AdvertisingBannerDto, ProductSelectionDto, DefaultPageDto, SliderItemDto } from "../libs/dtos";
import DefaultPageRepository from "./repository";

export default class DefaultPageService {
    private repository: DefaultPageRepository;

    constructor(repository: DefaultPageRepository) {
        this.repository = repository;
    }

    public async getDefaultProducts(): Promise<MiniProductDto[]> {
        return await this.repository.getDefaultProducts();
    }
    public async getAdvertisingBanner(): Promise<AdvertisingBannerDto> {
        return await this.repository.getAdvertisingBanner();
    }
    public async getProductSelections(): Promise<ProductSelectionDto[]> {
        return await this.repository.getProductSelections();
    }
    public async getDefaultPageData(): Promise<DefaultPageDto> {
        const products = await this.repository.getDefaultProducts();
        const advertisingBanner = await this.repository.getAdvertisingBanner();
        const productSelections = await this.repository.getProductSelections();

        return {
            advertisingBanner,
            productSelections,
            products,
        }
    }
    public async getSliderItems(): Promise<SliderItemDto[]> {
        return await this.repository.getSliderItems()
    }
}