import {serverConnection} from "./server-connection";
import {ProductFullType} from "./types/product-full-type";
import {ProductCategoryType} from "./types/product-category-type";
import imageNotFoundIcon from "../../images/image-not-found.jpg";

export class ProductService {

    constructor() {
    }

    public async loadProduct(id: number): Promise<ProductFullType> {
        const product: ProductFullType = (await serverConnection.get(`/product`, {params: {id: id}})).data;
        return product;
    }

    public async loadProductCategories(): Promise<ProductCategoryType[]> {
        const categories: ProductCategoryType[] = [
            {href: "", dataId: 0, title: "Все", img: imageNotFoundIcon},
            {href: "", dataId: 123, title: "Vlad", img: imageNotFoundIcon},
            {href: "", dataId: 55, title: "Lerka", img: imageNotFoundIcon},
            {href: "", dataId: 23, title: "Evka", img: imageNotFoundIcon},
            {href: "", dataId: 76, title: "Dimka", img: imageNotFoundIcon},
            {href: "", dataId: 123, title: "Vlad", img: imageNotFoundIcon},
            {href: "", dataId: 55, title: "Lerka", img: imageNotFoundIcon},
            {href: "", dataId: 23, title: "Evka", img: imageNotFoundIcon},
            {href: "", dataId: 76, title: "Dimka", img: imageNotFoundIcon},
            {href: "", dataId: 123, title: "Vlad", img: imageNotFoundIcon},
            {href: "", dataId: 55, title: "Lerka", img: imageNotFoundIcon},
            {
                href: "",
                dataId: 23,
                title: "asdadaddsdddsdaasdd adsasdada ada sdaadadd sd  ada ada dsadasdad ",
                img: imageNotFoundIcon
            },
            {href: "", dataId: 76, title: "Dimka", img: imageNotFoundIcon},
            {href: "", dataId: 123, title: "Vlad", img: imageNotFoundIcon},
            {href: "", dataId: 55, title: "Lerka", img: imageNotFoundIcon},
        ];

        return Promise.resolve(categories);
    }
}