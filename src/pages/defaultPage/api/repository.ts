import { ICONS } from "../../../images/images";
import { BannerDto, MiniProductDto, ProductSelectionDto, SliderItemDto } from "../libs/dtos";

export class Repository {
    constructor() { }

    public async loadDefaultProducts(): Promise<MiniProductDto[]> {
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
    public async loadAdvertisingBanner(): Promise<BannerDto> {
        return await new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    href: "https://avtozeon.by/",
                    img: ICONS.autoZeon
                })
            }, 1000)
        }))
    }
    public async loadProductSelections(): Promise<ProductSelectionDto[]> {
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
    public async loadSliderItems(): Promise<SliderItemDto[]> {
        return await Promise.resolve([
            ICONS.slider1,
            ICONS.slider2,
            ICONS.slider3,
            ICONS.slider4,
        ])
    }
}