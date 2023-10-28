import "./styles.scss"
import {useEffect} from "react";
import {ProductMini} from "../../../entities/product-mini-card";
import {observer} from "mobx-react";
import Loading from "../../../shared/ui/loading/ui";
import {recommendedProductsState} from "../model/model";

type PropsType = {}

export const RecommendedProducts = observer(({}: PropsType) => {

    useEffect(() => {
        recommendedProductsState.loadRecommendedProducts();
    }, [])

    if (!recommendedProductsState.products) {
        return <Loading/>
    }

    return <div className="products">
        {recommendedProductsState.products.map(product => <ProductMini {...product} />)}
    </div>
})