import "./styles.scss";
import { ProductSearchResult } from "../../../../entities/SearchPageGroup/productsItem";
import { SearchProductDto } from "../../../../pages/searchPage/lib/dtos";

type PropsType = {
    products: SearchProductDto[]
}

export function ProductSearchResults({ products }: PropsType) {
    return <div className="product-search-results">{products.map(product => <ProductSearchResult {...product} />)}</div>
}