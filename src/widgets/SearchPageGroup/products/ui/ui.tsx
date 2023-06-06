import "./styles.scss";
import { ProductItem } from "../../../../entities/SearchPageGroup/productsItem";
import { SearchProductDto } from "../../../../pages/searchPage/lib/dtos";

type PropsType = {
    products: SearchProductDto[]
}

export function Products({ products }: PropsType) {
    return <div className="products">{products.map(product => <ProductItem {...product} />)}</div>
}