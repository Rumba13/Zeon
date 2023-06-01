import "./products.scss";
import ProductItem, { ProductType } from "./productsItem/productsItem";

type PropsType = {
    products: ProductType[]
}

export default function Products({ products }: PropsType) {
    return <div className="products">{products.map(product => <ProductItem {...product} />)}</div>
}