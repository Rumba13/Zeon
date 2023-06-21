import { ProductDto } from "../libs/dtos";
import {Repository} from "./repository";

export class Service {
    private productPageRepository:Repository

    constructor(productPageRepository:Repository){
        this.productPageRepository = productPageRepository;
    }

    public async loadProduct(id:number):Promise<ProductDto> {
        return await this.productPageRepository.loadProduct(id);
    }
}