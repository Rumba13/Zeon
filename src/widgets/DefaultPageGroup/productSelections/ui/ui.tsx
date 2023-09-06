import { useEffect } from "react";
import { Loading } from "../../../../shared/ui//loading";
import { ProductSelection } from "./productSelection";
import { useStore } from "../../../../shared/lib/hooks";
import { observer } from "mobx-react";
import { DefaultPageStoreType } from "../../../../pages/defaultPage";

type PropsType = {}

export const ProductSelections = observer(({ }: PropsType) => {
    const state = useStore<DefaultPageStoreType>(state => state.defaultPage);

    useEffect(() => {
        state.loadProductSelections();
    }, [state])

    if (!state.productSelections) {
        return <Loading />
    }

    return <div className="product-selections">
        {state.productSelections.slice(0, 2).map((selection) => <ProductSelection {...selection} key={selection.img} />)}
    </div>
})
