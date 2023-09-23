import "./styles.scss";
import { useEffect } from "react";
import { useStore } from "../../../shared/lib/hooks";
import { SearchFilters } from "../../../widgets/SearchPageGroup/filters";
import { Pagination } from "../../../widgets/SearchPageGroup/paginator";
import { SearchTags } from "../../../widgets/SearchPageGroup/tags";
import { observer } from "mobx-react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../../shared/ui/loading";
import { ProductSearchResults } from "../../../widgets/SearchPageGroup/product-search-results";

export const SearchPage = observer(() => { //TODO refuck
    const state = useStore(state => state.searchPage);
    const [searchParams] = useSearchParams();
    const { title, productIds, searchTags, pagesCount, currentPage } = state;

    const searchQuery = searchParams.get("query");
    const searchParamsPage = Number(searchParams.get("page")) || 1;

    if (typeof searchQuery !== "string") {
        history.pushState(null, "", "/")
        return <></>
    }

    useEffect(() => {
        state.search(searchQuery);
        state.setCurrentPage(searchParamsPage);
    }, [state, searchQuery, searchParamsPage])

    return <div className="search-page">
        {title ? <h2 className="search-page__title">{title}</h2> : <Loading />}
        {searchTags ? <SearchTags tags={searchTags} /> : <Loading />}
        <SearchFilters />
        {productIds ? <ProductSearchResults productIds={productIds} loadProduct={state.loadProduct} /> : <Loading />}
        {pagesCount ? <Pagination pagesCount={pagesCount} currentPage={currentPage} /> : <Loading />}
    </div>
});