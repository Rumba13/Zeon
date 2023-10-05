import {serverConnection} from "./server-connection";
import {ProductFullType} from "./types/product-full-type";

export class ProductService {

    constructor() {
    }

    public async loadProduct(id: number): Promise<ProductFullType> {
        const product: ProductFullType = (await serverConnection.get(`/product`, {params: {id: id}})).data;
        product.photos = [
            "https://yt3.ggpht.com/ytc/AKedOLT7jH_Gl-FhitwQBoOgFiZD77Y2Jgfj6V9MXMyDNQ=s900-c-k-c0x00ffffff-no-rj",
            "https://yt3.ggpht.com/ytc/AKedOLT7jH_Gl-FhitwQBoOgFiZD77Y2Jgfj6V9MXMyDNQ=s900-c-k-c0x00ffffff-no-rj",
            "https://yt3.ggpht.com/ytc/AKedOLT7jH_Gl-FhitwQBoOgFiZD77Y2Jgfj6V9MXMyDNQ=s900-c-k-c0x00ffffff-no-rj",
            "https://yt3.ggpht.com/ytc/AKedOLT7jH_Gl-FhitwQBoOgFiZD77Y2Jgfj6V9MXMyDNQ=s900-c-k-c0x00ffffff-no-rj",

        ];
        //TODO REMOVE WITH SERVER SERVE
        return product;
    }

}