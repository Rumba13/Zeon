import "./styles.scss";
import Filters from "../filters/filters";
import Paginator from "../paginator/paginator";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { DynamicAdaptive } from "../../legacy_dynamicAdaptive/dynamicAdaptive";
import { useEffect } from "react";
import { loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk } from "../../../pages/productSelectionPage";
import { Loading } from "../../../shared/ui/loading";
import { Products } from "../products";
import { PageTitle } from "./pageTitle";
import { Tags } from "../tags";

export function ProductSelectionPage() {
    const { paginator, products, selectionTags, title } = useAppSelector(state => state.productSelectionPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadSelectionProductsThunk())
        dispatch(loadSelectionTagsThunk())
        dispatch(loadSelectionTitleThunk())
    }, [dispatch, loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk])

    return <div className="product-selection-page">

        {title ? <PageTitle title={title} /> : <Loading />}

        {selectionTags ? <Tags tags={selectionTags} /> : <Loading />}

        <Filters />

        {products ? <Products products={products} /> : <Loading />}

        <Paginator />
    </div>
}