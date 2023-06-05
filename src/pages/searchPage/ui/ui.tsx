import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { useEffect } from "react";
import { loadSelectionProductsThunk, loadSelectionTagsThunk, loadSelectionTitleThunk } from "..";
import { Loading } from "../../../shared/ui/loading";
import { loadPaginatorThunk } from "..";
import { SearchFilters } from "../../../widgets/SearchPageGroup/filters";
import { Paginator } from "../../../widgets/SearchPageGroup/paginator";
import { SearchPageProducts } from "../../../widgets/SearchPageGroup/products";
import { Tags } from "../../../widgets/SearchPageGroup/tags";
import { PageTitle } from "../../../layouts/SearchPageGroup/pageTitle";

export function SearchPage() {
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