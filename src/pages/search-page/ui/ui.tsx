import "./styles.scss";
import {useEffect} from "react";
import {SearchFilters} from "../../../widgets/SearchPageGroup/filters";
import {Pagination} from "../../../widgets/SearchPageGroup/paginator";
import {SearchTags} from "../../../widgets/SearchPageGroup/tags";
import {observer} from "mobx-react";
import {useSearchParams} from "react-router-dom";
import {SearchResults} from "../../../widgets/SearchPageGroup/search-results";
import {SearchPageTitle} from "./search-page-title";
import {searchState} from "../../../features/search/search";

export const SearchPage = observer(() => {
    const [searchParams] = useSearchParams();
    const {
        searchQuery: oldSearchQuery,
        productIds,
        searchTags,
        pagesCount,
        currentPage,
        loadSearchProduct
    } = searchState;

    const searchQueryAtParams = searchParams.get("query");
    const currentPageAtParams = Number(searchParams.get("page"));

    if (typeof searchQueryAtParams !== "string") {
        history.pushState(null, "", "/404");
        throw Error("Search query is undefined");
    }

    useEffect(() => {
        searchState.search(searchQueryAtParams);
        searchState.setCurrentPage(currentPageAtParams);
    }, [searchQueryAtParams, currentPageAtParams]);

    return <div className="search-page">
        <SearchPageTitle title={searchQueryAtParams}/>
        <SearchTags searchTags={searchTags}/>
        <SearchFilters/>
        <SearchResults productIds={productIds} loadProduct={loadSearchProduct}/>
        <Pagination pagesCount={pagesCount} currentPage={currentPage}/>
    </div>
});