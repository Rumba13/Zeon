import "./styles.scss";
import Filters from "../filters/filters";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { useEffect } from "react";
import { loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk } from "../../../pages/productSelectionPage";
import { Loading } from "../../../shared/ui/loading";
import { PageTitle } from "./pageTitle";
import { Tags } from "./tags";
import { Products } from "./products";
import { loadPaginatorThunk } from "../../../pages/productSelectionPage";
import { Paginator } from "./paginator";

export function ProductSelectionPage() {
    const { paginator, products, selectionTags, title } = useAppSelector(state => state.productSelectionPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadSelectionProductsThunk())
        dispatch(loadSelectionTagsThunk())
        dispatch(loadSelectionTitleThunk())
        dispatch(loadPaginatorThunk())
    }, [dispatch, loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk])

    return <div className="product-selection-page">

        {title ? <PageTitle title={title} /> : <Loading />}

        {selectionTags ? <Tags tags={selectionTags} /> : <Loading />}

        <Filters />

        {products ? <Products products={products} /> : <Loading />}

        {paginator ? <Paginator paginator={paginator} /> : <Loading />}
    </div>
}