import {SearchTagType} from "./search-tag-type";
import {ProductIdType} from "./product-id-type";

export type SearchResult = {
    productsOnPage: ProductIdType[],
    searchTags: SearchTagType[],
    pageCount: number,
}