import "./styles.scss";
import {useEffect} from "react";
import {observer} from "mobx-react";
import {productCategoriesState} from "../model/model";
import Loading from "../../../shared/ui/loading/ui";
import {ProductSelection} from "./productSelection";

type PropsType = {}

export const ProductSelections = observer(({}: PropsType) => {

    useEffect(() => {
        productCategoriesState.loadProductCategories();
    }, [])

    if (!productCategoriesState.productCategories) {
        return <Loading/>
    }

    return <div className="product-selections">
        {productCategoriesState.productCategories.slice(0, 2).map((selection) =>
            <ProductSelection
                {...selection}

                key={selection.img}
            />
        )}
    </div>
})
