import { useEffect } from "react";
import ProductSelection from "../../../../components/productSelection/productSelection";
import banner from "../../../../shared/ui//banner/banner";

import { Loading } from "../../../../shared/ui//loading";
import { loadProductSelectionsThunk } from "../model/model";
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks";

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
        {selections.map((selection:any) => <ProductSelection {...selection} key={selection.img} />)}
    </div>
}