import { useEffect } from "react";
import ProductSelection from "../../../../components/productSelection/productSelection";
import banner from "../../../../shared/banner/banner";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import { Loading } from "../../../../shared/loading";
import { loadProductSelectionsThunk } from "../model/model";

type PropsType = {
}

export function ProductSelections({}: PropsType) {
    const dispatch = useAppDispatch();
    const selections = useAppSelector((state) => state.defaultPage.productSelections);

    useEffect(() => {
        dispatch(loadProductSelectionsThunk());
    }, [dispatch, loadProductSelectionsThunk])


    if (!selections) {
        return <Loading />
    }

    return <div className="product-selections">
        {selections.map(selection => <ProductSelection {...selection} key={selection.img} />)}
    </div>
}