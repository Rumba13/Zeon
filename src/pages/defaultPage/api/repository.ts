import { ICONS } from "../../../images/images";
import { AdvertisingBannerDto, MiniProductDto, ProductSelectionDto, SliderItemDto } from "../libs/dtos";

export default class DefaultPageRepository {
    constructor() { }

    public async getDefaultProducts(): Promise<MiniProductDto[]> {
        return await Promise.resolve([
            { id: 1, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
            { id: 2, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
            { id: 3, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
            { id: 4, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
            { id: 5, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
            { id: 6, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
            { id: 7, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
            { id: 8, previewImg: "https://clck.ru/33XVQd", discountPrice: 10000, type: "dakdjsid", batch: " adsddada", manufacturer: "dasda" },
        ])
    }
    public async getAdvertisingBanner(): Promise<AdvertisingBannerDto> {
        return await new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    href: "https://avtozeon.by/",
                    img: ICONS.autoZeon
                })
            }, 1000)
        }))
    }
    public async getProductSelections(): Promise<ProductSelectionDto[]> {
        return await Promise.resolve([
            {
                href: "#",
                title: "Техника Holt",
                img: ICONS.holt
            },
            {
                href: "#",
                title: "Обогреватели",
                img: ICONS.heating
            }
        ])
    }
    public async getSliderItems(): Promise<SliderItemDto[]> {
        return await Promise.resolve([
            ICONS.slider1,
            ICONS.slider2,
            ICONS.slider3,
            ICONS.slider4,
        ])
    }
}