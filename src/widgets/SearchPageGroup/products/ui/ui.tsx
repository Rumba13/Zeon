import "./styles.scss";
import { ProductItem } from "../../../../entities/SearchPageGroup/productsItem";
import { SelectionProductDto } from "../../../../pages/searchPage/lib/dtos";

type PropsType = {
    products: SelectionProductDto[]
}

export function Products({ products }: PropsType) {
    return <div className="products">{products.map(product => <ProductItem {...product} />)}</div>
}