import "./styles.scss";
import { useEffect } from "react";
import { loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk,loadPaginatorThunk } from "..";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { Loading } from "../../../shared/ui/loading";
import { PageTitle } from "../../../layouts/SearchPageGroup/pageTitle";
import { SearchFilters } from "../../../widgets/SearchPageGroup/filters";
import { Paginator } from "../../../widgets/SearchPageGroup/paginator";
import { SearchPageProducts } from "../../../widgets/SearchPageGroup/products";
import { SearchTags } from "../../../widgets/SearchPageGroup/tags";

export function SearchPage() {
    const dispatch = useAppDispatch();
    const { paginator, products, selectionTags, title:pageTitle } = useAppSelector(state => state.productSelectionPage);

    useEffect(() => {
        dispatch(loadSelectionProductsThunk());
        dispatch(loadSelectionTagsThunk());
        dispatch(loadSelectionTitleThunk());
        dispatch(loadPaginatorThunk());
    }, [dispatch, loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk, loadPaginatorThunk])

    return <div className="product-selection-page">

        {pageTitle ? <PageTitle title={pageTitle} /> : <Loading />}

        {selectionTags ? <SearchTags tags={selectionTags} /> : <Loading />}

        <SearchFilters />

        {products ? <SearchPageProducts products={products} /> : <Loading />}

        {paginator ? <Paginator paginator={paginator} /> : <Loading />}
    </div>
}