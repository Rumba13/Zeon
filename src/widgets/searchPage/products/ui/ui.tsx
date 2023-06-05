import { ProductItem } from "../../../../entities/searchPage/productsItem";
import { SelectionProductDto } from "../../../../pages/productSelectionPage/lib/dtos";
import "./styles.scss";

type PropsType = {
    products: SelectionProductDto[]
}

export function Products({ products }: PropsType) {
    return <div className="products">{products.map(product => <ProductItem {...product} />)}</div>
}