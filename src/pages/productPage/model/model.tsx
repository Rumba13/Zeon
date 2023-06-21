import { ProductDto } from "../libs/dtos";
import { Repository } from "../api/repository"
import { Service } from "../api/service"
import { makeAutoObservable } from "mobx";

class ProductPageState {
    private service: Service;
    public product?: ProductDto

    private setProduct = (product: ProductDto) => this.product = product;

    constructor(service: Service) {
        this.service = service;
        makeAutoObservable(this);
    }
    
    public async loadProduct(id:number) {
        this.setProduct(await this.service.loadProduct(id));
    }
}

export { ProductPageState as ProductPageStateType };
export const productPageState = new ProductPageState(new Service(new Repository()));