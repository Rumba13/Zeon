import "./styles.scss";
import { SelectionProductDto } from "../../../../pages/productSelectionPage/lib/dtos";
import ProductItem from "../productsItem/productsItem";

type PropsType = {
    products: SelectionProductDto[]
}

export function Products({ products }: PropsType) {
    return <div className="products">{products.map(product => <ProductItem {...product} />)}</div>
}