import {ProductFullType} from "../../../shared/api/types/product-full-type";
import {ProductSearchResultType} from "../../../shared/api/types/product-search-result-type";

export function productFullToProductSearchResult(productFull: ProductFullType): ProductSearchResultType {
    return {
        ...productFull,
        previewImage: productFull.photos[0],
    };
}
