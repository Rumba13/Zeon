import {ProductService} from "../../../../shared/api/product-service";
import {ProductFullType} from "../../../../shared/api/types/product-full-type";
import {makeAutoObservable, runInAction} from "mobx";

class ProductDetailsStore {
    private productService: ProductService;
    public product?: ProductFullType;

    private setProduct = (product: ProductFullType) => this.product = product;

    constructor(productService: ProductService) {
        this.productService = productService;
        makeAutoObservable(this);
    }

    public async loadProduct(id: number) {
        this.setProduct(await this.productService.loadProduct(id))
    }
    public setRating = async (rating: number) => {
        
        if (!this.product) {
            throw new Error("Trying set rating when product-details-card isnt BLYA");
        }

        //server logic

        runInAction(() => {
            if (this.product)
                this.product.rating = rating
        })
    }
}

export type { ProductDetailsStore as ProductPageStoreType };
export const productPageStore = new ProductDetailsStore(new ProductService());