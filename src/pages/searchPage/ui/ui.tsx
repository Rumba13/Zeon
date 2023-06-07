import "./styles.scss";
import { useEffect } from "react";
import { loadSearchProductsThunk, loadSearchTagsThunk, loadSearchTitleThunk,loadPaginatorThunk } from "..";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { Loading } from "../../../shared/ui/loading";
import { PageTitle } from "../../../layouts/SearchPageGroup/pageTitle";
import { SearchFilters } from "../../../widgets/SearchPageGroup/filters";
import { Paginator } from "../../../widgets/SearchPageGroup/paginator";
import { SearchTags } from "../../../widgets/SearchPageGroup/tags";
import { ProductSearchResults } from "../../../widgets/SearchPageGroup/productSearchResults";

export function SearchPage() {
    const dispatch = useAppDispatch();
    const { paginator, products, searchTags, title:pageTitle } = useAppSelector(state => state.searchPage);

    useEffect(() => {
        dispatch(loadSearchProductsThunk());
        dispatch(loadSearchTagsThunk());
        dispatch(loadSearchTitleThunk());
        dispatch(loadPaginatorThunk());
    }, [dispatch, loadSearchProductsThunk, loadSearchTagsThunk, loadSearchTitleThunk, loadPaginatorThunk])

    return <div className="search-page">

        {pageTitle ? <PageTitle title={pageTitle} /> : <Loading />}

        {searchTags ? <SearchTags tags={searchTags} /> : <Loading />}

        <SearchFilters />

        {products ? <ProductSearchResults products={products} /> : <Loading />}

        {paginator ? <Paginator paginator={paginator} /> : <Loading />}
    </div>
}