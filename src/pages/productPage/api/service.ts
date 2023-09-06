import { serverConnection } from "../../../shared/api/serverConnection";
import { ProductDto } from "../libs/dtos";
import { Repository } from "./repository";

export class Service {
    private productPageRepository: Repository

    constructor(productPageRepository: Repository) {
        this.productPageRepository = productPageRepository;
    }

    public async loadProduct(id: number): Promise<ProductDto> {
        const product:ProductDto = (await serverConnection.get(`/product`, { params: { id: id } })).data;
        return product;
    }
}