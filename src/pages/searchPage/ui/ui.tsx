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

export const SearchPage = observer(() => {
    const state = useStore(state => state.searchPage);
    const { title, products, paginator, searchTags } = state;

    useEffect(() => {
        state.loadProducts();
        state.loadPageTitle();
        state.loadSearchTags();
        state.loadPaginator();
    }, [state])

    return <div className="search-page">
        {title ? <PageTitle title={title} /> : <Loading />}
        {searchTags ? <SearchTags tags={searchTags} /> : <Loading />}
        <SearchFilters />
        {products ? <ProductSearchResults products={products} /> : <Loading />}
        {paginator ? <Pagination paginator={paginator} /> : <Loading />}
    </div>
});