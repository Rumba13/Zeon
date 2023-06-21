import { useEffect } from "react";
import { Loading } from "../../../../shared/ui//loading";
import { ProductSelection } from "./productSelection";
import { useStore } from "../../../../shared/lib/hooks";
import { DefaultPageStateType } from "../../../../pages/defaultPage";
import { observer } from "mobx-react";

type PropsType = {}

export const ProductSelections = observer(({ }: PropsType) => {
    const state = useStore<DefaultPageStateType>(state => state.defaultPage)

    useEffect(() => {
        state.loadProductSelections();
    }, [state])

    if (!state.productSelections) {
        return <Loading />
    }

    return <div className="product-selections">
        {state.productSelections.map((selection) => <ProductSelection {...selection} key={selection.img} />)}
    </div>
})
