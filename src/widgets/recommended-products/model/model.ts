import {RecommendationService} from "../../../shared/api/recommendation-service";
import {ProductMiniType} from "../../../shared/api/types/product-mini-type";
import {makeAutoObservable} from "mobx";

class RecommendedProductsStore {
    private recommendationService:RecommendationService;
    public products?: ProductMiniType[];

    private setProducts = (products: ProductMiniType[]) => this.products = products;

    constructor(recommendationService:RecommendationService) {
        this.recommendationService = recommendationService;
        makeAutoObservable(this);
    }

    public async loadRecommendedProducts() {//recommended-products
        this.setProducts(await this.recommendationService.loadRecommendedProducts());
    }
}

export const recommendedProductsState = new RecommendedProductsStore(new RecommendationService());