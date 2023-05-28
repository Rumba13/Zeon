import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import { Loading } from "../../../../shared/loading";
import { loadDefaultProductsThunk } from "../model/model";
import { ProductMini } from "../../../../entities/defaultPage/product";

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