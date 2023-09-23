import { serverConnection } from "./server-connection";
import { ProductFullType } from "./types/product-full-type";

export class ProductService {

    constructor() {}

    public async loadProduct(id: number): Promise<ProductFullType> {
        const product:ProductFullType = (await serverConnection.get(`/product`, { params: { id: id } })).data;
        return product;
    }

}