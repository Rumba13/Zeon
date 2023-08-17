import { ProductDto } from "../libs/dtos";
import { Repository } from "../api/repository"
import { Service } from "../api/service"
import { makeAutoObservable, runInAction } from "mobx";

class ProductPageStore {
    private service: Service;
    public product?: ProductDto

    private setProduct = (product: ProductDto) => this.product = product;


    constructor(service: Service) {
        this.service = service;
        makeAutoObservable(this);
    }

    public async loadProduct(id: number) {
        this.setProduct(await this.service.loadProduct(id));
    }
    public setRating = async (rating: number) => {
        
        if (!this.product) {
            throw new Error("Trying set rating when product isnt BLYA");
        }

        //server logic

        runInAction(() => {
            if (this.product)
                this.product.rating = rating
        })
    }
}

export type { ProductPageStore as ProductPageStoreType };
export const productPageStore = new ProductPageStore(new Service(new Repository()));