import { ProductDto } from "../libs/dtos";
import ProductPageRepository from "./repository";

export default class ProductPageService {
    private productPageRepository:ProductPageRepository

    constructor(productPageRepository:ProductPageRepository){
        this.productPageRepository = productPageRepository;
    }

    public async getProductById(id:number):Promise<ProductDto> {
        return await this.productPageRepository.getProductById(id);
    }
}