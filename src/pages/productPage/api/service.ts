import { serverConnection } from "../../../shared/api/serverConnection";
import { ProductDto } from "../libs/dtos";

export class Service {

    constructor() {}

    public async loadProduct(id: number): Promise<ProductDto> {
        const product:ProductDto = (await serverConnection.get(`/product`, { params: { id: id } })).data;
        return product;
    }
}