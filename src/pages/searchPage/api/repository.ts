import { ICONS } from "../../../images/images"
import { SearchProductDto, PaginatorDto, SearchTagDto, SearchPageTitleDto } from "../lib/dtos";

export class Repository {
    constructor() { }

    public async loadSearchTags(): Promise<SearchTagDto[]> {
        return await Promise.resolve([
            { title: "0", link: "##", isActive: false },
            { title: "240gb", link: "##", isActive: false },
            { title: "512gb", link: "##", isActive: true },
            { title: "100000gb", link: "##", isActive: false },
            { title: "10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb10000213133133123123130gb 10000213133133123123130gb", link: "##", isActive: false },
        ])
    }
    public async loadSearchProducts(): Promise<SearchProductDto[]> {
        return await new Promise(resolve => setTimeout(() => resolve([
            {
                manufacturer: "G.SKILL",
                type: "Оперативная память",
                batch: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
                id: 1233131231331,
                characteristics: { lers: 1, gay: "dsdasdad" },
                deliveryDate: (new Date(312313)),
                price: 100,
                discountPrice: 20000,
                previewImage: ICONS.slider1
            },
            {
                manufacturer: "G.SKILL",
                type: "Оперативная память",
                batch: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
                id: 1233131231331,
                characteristics: { lers: 1, gay: "dsdasdad" },
                deliveryDate: (new Date(312313)),
                price: 100,
                discountPrice: 20000,
                previewImage: ICONS.slider1
            },
            {
                manufacturer: "G.SKILL",
                type: "Оперативная память",
                batch: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
                id: 1233131231331,
                characteristics: { lers: 1, gay: "dsdasdad" },
                deliveryDate: (new Date(312313)),
                price: 100,
                discountPrice: 20000,
                previewImage: ICONS.slider1
            },
            {
                manufacturer: "G.SKILL",
                type: "Оперативная память",
                batch: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
                id: 1233131231331,
                characteristics: { lers: 1, gay: "dsdasdad" },
                deliveryDate: (new Date(312313)),
                price: 100,
                discountPrice: 20000,
                previewImage: ICONS.slider1
            }, {
                manufacturer: "G.SKILL",
                type: "Оперативная память",
                batch: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
                id: 1233131231331,
                characteristics: { lers: 1, gay: "dsdasdad" },
                deliveryDate: (new Date(312313)),
                price: 100,
                discountPrice: 20000,
                previewImage: ICONS.slider1
            }, {
                manufacturer: "G.SKILL",
                type: "Оперативная память",
                batch: "Ripjaws V 32GB DDR4 PC4-21300 F4-2666C19S-32GVK",
                id: 1233131231331,
                characteristics: { lers: 1, gay: "dsdasdad" },
                deliveryDate: (new Date(312313)),
                price: 100,
                discountPrice: 20000,
                previewImage: ICONS.slider1
            }]), 2000))
    }
    public async loadPageTitle(): Promise<SearchPageTitleDto> {
        return await Promise.resolve("title")
    }
    public async loadPaginator(): Promise<PaginatorDto> {
        return await Promise.resolve({ currentPage: 1, pagesCount: 40 });
    }
}