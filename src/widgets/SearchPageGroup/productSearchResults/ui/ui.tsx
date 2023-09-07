import "./styles.scss";
import { ProductSearchResult } from "../../../../entities/SearchPageGroup/productsItem";
import { SearchProductDto } from "../../../../pages/searchPage/lib/dtos";

type PropsType = {
    productIds: string[],
    loadProduct: (productId: string) => Promise<SearchProductDto>
}

export function ProductSearchResults({ productIds, loadProduct }: PropsType) {
    return <div className="product-search-results">{productIds.map(productId => <ProductSearchResult productId={productId} loadProduct={loadProduct} />)}</div>
}