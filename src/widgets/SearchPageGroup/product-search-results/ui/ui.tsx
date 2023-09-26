import "./styles.scss";
import { ProductSearchResult } from "../../../../entities/product-search-result";
import {ProductSearchResultType} from "../../../../shared/api/types/product-search-result-type";
import {ProductIdType} from "../../../../shared/api/types/product-id-type";
import Loading from "../../../../shared/ui/loading/ui";

type PropsType = {
    productIds?: ProductIdType[],
    loadProduct: (productId: ProductIdType) => Promise<ProductSearchResultType>
}

export function ProductSearchResults({ productIds, loadProduct }: PropsType) {

    if(!productIds) {
        return  <Loading/>
    }

    return <div className="product-search-results">{productIds.map(productId => <ProductSearchResult productId={productId} loadProduct={loadProduct} />)}</div>
}