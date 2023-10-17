import "./styles.scss";
import {useEffect} from "react";
import {useStore} from "../../../shared/lib/hooks";
import {SearchFilters} from "../../../widgets/SearchPageGroup/filters";
import {Pagination} from "../../../widgets/SearchPageGroup/paginator";
import {SearchTags} from "../../../widgets/SearchPageGroup/tags";
import {observer} from "mobx-react";
import {useSearchParams} from "react-router-dom";
import {ProductSearchResults} from "../../../widgets/SearchPageGroup/product-search-results";
import {SearchPageTitle} from "./search-page-title";

export const SearchPage = observer(() => {
    const searchPageState = useStore(state => state.searchPage);
    const [searchParams] = useSearchParams();
    const {searchQuery,productIds, searchTags, pagesCount, currentPage, loadSearchProduct} = searchPageState;

    const searchQueryFromParams = searchParams.get("query");
    const currentPageFromParams = Number(searchParams.get("page")) || 1;

    if (typeof searchQueryFromParams !== "string") {
        history.pushState(null, "", "/404")
        return <></>;
    }

    useEffect(() => {
        searchPageState.search(searchQueryFromParams);
        searchPageState.setCurrentPage(currentPageFromParams);
    }, [searchQueryFromParams, currentPageFromParams])

    return <div className="search-page">
        <SearchPageTitle title={searchQuery}/>
        <SearchTags searchTags={searchTags}/>
        <SearchFilters/>
        <ProductSearchResults productIds={productIds} loadProduct={loadSearchProduct}/>
        <Pagination pagesCount={pagesCount} currentPage={currentPage}/>
    </div>
});