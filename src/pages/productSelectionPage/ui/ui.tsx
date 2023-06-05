import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { useEffect } from "react";
import { loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk } from "..";
import { Loading } from "../../../shared/ui/loading";
import { PageTitle } from "../../../layouts/searchPage/pageTitle";
import { loadPaginatorThunk } from "..";
import { SearchPageProducts } from "../../../widgets/searchPage/products";
import { Paginator } from "../../../widgets/searchPage/paginator";
import { Tags } from "../../../widgets/searchPage/tags";
import { SearchFilters } from "../../../widgets/searchPage/filters";

export function ProductSelectionPage() {
    const { paginator, products, selectionTags, title } = useAppSelector(state => state.productSelectionPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadSelectionProductsThunk());
        dispatch(loadSelectionTagsThunk());
        dispatch(loadSelectionTitleThunk());
        dispatch(loadPaginatorThunk());
    }, [dispatch, loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk, loadPaginatorThunk])

    return <div className="product-selection-page">

        {title ? <PageTitle title={title} /> : <Loading />}

        {selectionTags ? <Tags tags={selectionTags} /> : <Loading />}

        <SearchFilters />

        {products ? <SearchPageProducts products={products} /> : <Loading />}

        {paginator ? <Paginator paginator={paginator} /> : <Loading />}
    </div>
}