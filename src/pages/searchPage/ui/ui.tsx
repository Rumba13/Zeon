import "./styles.scss";
import { useEffect } from "react";
import { useStore } from "../../../shared/lib/hooks";
import { Loading } from "../../../shared/ui/loading";
import { PageTitle } from "../../../layouts/SearchPageGroup/pageTitle";
import { SearchFilters } from "../../../widgets/SearchPageGroup/filters";
import { Pagination } from "../../../widgets/SearchPageGroup/paginator";
import { SearchTags } from "../../../widgets/SearchPageGroup/tags";
import { ProductSearchResults } from "../../../widgets/SearchPageGroup/productSearchResults";
import { observer } from "mobx-react";
import { useSearchParams } from "react-router-dom";

export const SearchPage = observer(() => { //TODO refuck
    const state = useStore(state => state.searchPage);
    const [searchParams, setSearchParams] = useSearchParams();
    const { title, products, searchTags, pagesCount, currentPage } = state;

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
        {title ? <PageTitle title={title} /> : <Loading />}
        {searchTags ? <SearchTags tags={searchTags} /> : <Loading />}
        <SearchFilters />
        {products ? <ProductSearchResults productIds={products} loadProduct={state.loadProduct} /> : <Loading />}
        {pagesCount ? <Pagination paginator={{ currentPage, pagesCount }} /> : <Loading />}
    </div>
});