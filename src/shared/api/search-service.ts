import { serverConnection } from "./server-connection";
import {SearchResult} from "./types/search-result";
import {ProductSearchResultType} from "./types/product-search-result-type";

export class SearchService {

    constructor() { }
    public async search(query: string): Promise<SearchResult> {
        const searchResults: SearchResult = (await serverConnection.get(`/search?query=${query}`)).data;
        return searchResults
    }
}