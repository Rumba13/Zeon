import { serverConnection } from "../../../shared/api/serverConnection";
import { SearchProductDto, SearchTagDto, SearchPageTitleDto, SearchResult } from "../lib/dtos"

export class Service {

    constructor() { }
    public async loadProduct(productId: string): Promise<SearchProductDto> {

        if (typeof productId !== "string" && typeof productId !== "number") {
            throw new Error("Не в этот раз дубина || product id type is not string or number, please check page url " + typeof productId);
        }

        const product = (await serverConnection.get("/product", { params: { id: productId } })).data;
        return product;
    }
    public async search(query: string): Promise<SearchResult> {
        const searchResults: SearchResult = (await serverConnection.get(`/search?query=${query}`)).data;
        return searchResults
    }
}