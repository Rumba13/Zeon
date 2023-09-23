import { useEffect } from "react";
import { ProductMini } from "../../../../entities/product-mini-card";
import { observer } from "mobx-react";
import Loading from "../../../../shared/ui/loading";
import {recommendedProductsState} from "../model/model";

type PropsType = {}

export const Products = observer(({ }: PropsType) => {

    useEffect(() => {
        recommendedProductsState.loadRecommendedProducts()
    }, [])

    if (!recommendedProductsState.products) {
        return <Loading />
    }

    return <div className="products">
        <div className="product-container">
            {recommendedProductsState.products.map(product => <ProductMini {...product} />)}
        </div>
    </div>
})