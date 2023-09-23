import {makeAutoObservable} from "mobx";
import {RecommendationService} from "../../../../shared/api/recommendation-service";
import {SliderItemType} from "../../../../shared/api/types/slider-item-type";

class HomeSliderState {
    private recommendationService:RecommendationService;
    public sliderItems?: SliderItemType[];

    private setSliderItems = (sliderItems: SliderItemType[]) => this.sliderItems = sliderItems;

    constructor(recommendationService:RecommendationService) {
        this.recommendationService = recommendationService;
        makeAutoObservable(this);
    }

    public async loadSliderItems() {
        this.setSliderItems(await this.recommendationService.loadRecommendationsSlider());
    }
}

export const homeSliderState = new HomeSliderState(new RecommendationService());
export type { HomeSliderState as HomeSliderStateType  };