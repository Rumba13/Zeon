import { BannerDto, MiniProductDto, ProductSelectionDto, SliderItemDto } from "../libs/dtos"
import { Repository } from "../api/repository"
import { Service } from "../api/service"
import { makeAutoObservable } from "mobx"

class DefaultPageStore {
    private service: Service;

    public productSelections?: ProductSelectionDto[];
    public advertisingBanner?: BannerDto;
    public products?: MiniProductDto[];
    public sliderItems?: SliderItemDto[];

    private setProductSelections = (selections: ProductSelectionDto[]) => this.productSelections = selections;
    private setAdvertisingBanner = (banner: BannerDto) => this.advertisingBanner = banner;
    private setProducts = (products: MiniProductDto[]) => this.products = products;
    private setSliderItems = (sliderItems: SliderItemDto[]) => this.sliderItems = sliderItems;

    constructor(service: Service) {
        this.service = service;
        makeAutoObservable(this);
    }

    public async loadAdvertisingBanner() {
        this.setAdvertisingBanner(await this.service.loadAdvertisingBanner());
    }
    public async loadProductSelections() {
        this.setProductSelections(await this.service.loadProductSelections());
    }

    public async loadDefaultProducts() {
        this.setProducts(await this.service.loadDefaultProducts());
    }

    public async loadSliderItems() {
        this.setSliderItems(await this.service.getSliderItems());
    }
}

export const defaultPageStore = new DefaultPageStore(new Service(new Repository()));
export type { DefaultPageStore as DefaultPageStoreType };