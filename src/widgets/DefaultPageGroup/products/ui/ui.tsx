import { useEffect } from "react";
import { Loading } from "../../../../shared/ui//loading";
import { useStore } from "../../../../shared/lib/hooks";
import { ProductMini } from "../../../../entities/DefaultPageGroup/product";
import { DefaultPageStoreType } from "../../../../pages/defaultPage";
import { observer } from "mobx-react";

type PropsType = {}

export const Products = observer(({ }: PropsType) => {
    const state = useStore<DefaultPageStoreType>(state => state.defaultPage);

    useEffect(() => {
        state.loadDefaultProducts()
    }, [state])

    if (!state.products) {
        return <Loading />
    }

    return <div className="products">
        <div className="product-container">
            {state.products.map(product => <ProductMini {...product} />)}
        </div>
    </div>
})