import {ProductCategoryType} from "../../../../shared/api/types/product-category-type";
import {RecommendationService} from "../../../../shared/api/recommendation-service";
import {makeAutoObservable} from "mobx";

export class ProductCategoriesStore {

    private recommendationsService:RecommendationService
    constructor(recommendationsService:RecommendationService) {
        this.recommendationsService = recommendationsService;
        makeAutoObservable(this);
    }

    public productCategories?: ProductCategoryType[];

    private setProductCategories = (selections: ProductCategoryType[]) => this.productCategories = selections;

    public async loadProductCategories() {
        this.setProductCategories(await this.recommendationsService.loadRecommendedProductCategories());
    }
}

export const productCategoriesState = new ProductCategoriesStore(new RecommendationService());
