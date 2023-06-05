import { useEffect } from "react";
import { Loading } from "../../../../shared/ui//loading";
import { loadDefaultProductsThunk } from "../model/model";
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks";
import { ProductMini } from "../../../../entities/DefaultPageGroup/product";

type PropsType = {

}

export function Products({ }: PropsType) {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.defaultPage.products);

    useEffect(() => {
        dispatch(loadDefaultProductsThunk());
    }, [dispatch, loadDefaultProductsThunk])

    if (!products) {
        return <Loading />
    }

    return <div className="products">
        <div className="product-container">
            {products.map(product => <ProductMini {...product} />)}
        </div>
    </div>
}