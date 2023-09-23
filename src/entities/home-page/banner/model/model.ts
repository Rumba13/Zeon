import {BannerType} from "../../../../shared/api/types/banner-type";
import {RecommendationService} from "../../../../shared/api/recommendation-service";
import {makeAutoObservable} from "mobx";

export class HomePageBannerStore {
    private recommendationsService: RecommendationService;

    constructor(recommendationsService:RecommendationService) {
        this.recommendationsService = recommendationsService;
        makeAutoObservable(this);
    }

    public advertisingBanner?: BannerType;
    private setHomePageBanner = (banner: BannerType) => this.advertisingBanner = banner;

    public async loadHomePageBanner() {
        this.setHomePageBanner(await this.recommendationsService.loadRecommendationsBanner());
    }
}

export const homePageBannerState = new HomePageBannerStore(new RecommendationService());