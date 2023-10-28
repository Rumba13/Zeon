import {serverConnection} from "./server-connection";
import {ProductMiniType} from "./types/product-mini-type";
import {BannerType} from "./types/banner-type";
import {ProductCategoryType} from "./types/product-category-type";

export class RecommendationService {
    constructor() {

    }

    public async loadRecommendationsBanner(): Promise<BannerType> {
        return await (await serverConnection.get("/advertising-banner")).data;
    }
    public async loadRecommendedProducts(): Promise<ProductMiniType[]> {
        return (await serverConnection.get("/recommended-products")).data;
    }
    public async loadRecommendedProductCategories(): Promise<ProductCategoryType[]> {
        return (await serverConnection.get("/recommended-product-categories")).data;
    }
    public async loadRecommendationsSlider() {
        return (await serverConnection.get("/home-page-slider")).data;
    }
}
