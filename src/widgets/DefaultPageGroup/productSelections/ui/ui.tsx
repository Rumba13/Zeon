import { useEffect } from "react";
import { Loading } from "../../../../shared/ui//loading";
import { loadProductSelectionsThunk } from "../model/model";
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks";
import { ProductSelection } from "./productSelection";

type PropsType = {}

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
        {selections.map((selection) => <ProductSelection {...selection} key={selection.img} />)}
    </div>
}