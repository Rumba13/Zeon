import "./styles.scss";
import { SearchProduct } from "../../../../entities/search-product-card";
import {ProductSearchResultType} from "../../../../shared/api/types/product-search-result-type";
import {ProductIdType} from "../../../../shared/api/types/product-id-type";
import Loading from "../../../../shared/ui/loading/ui";

type PropsType = {
    productIds?: ProductIdType[],
    loadProduct: (productId: ProductIdType) => Promise<ProductSearchResultType>
}

export function SearchResults({ productIds, loadProduct }: PropsType) {

    if(!productIds) {
        return  <Loading/>
    }

    return <div className="search-product">{productIds.map(productId => <SearchProduct productId={productId} loadProduct={loadProduct} />)}</div>
}