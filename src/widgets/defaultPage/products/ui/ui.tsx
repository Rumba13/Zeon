import { MiniProductDto } from "../../../../pages/defaultPage/libs/dtos";
import Product from "../../../product/product";

type PropsType = {
    products: MiniProductDto[]
}

export function ProductsWidget({ products }: PropsType) {
    return <div className="products">
        <div className="product-container">
            {products.map(product => <Product {...product} />)}
        </div>
    </div>
}