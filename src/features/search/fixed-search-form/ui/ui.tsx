import "./styles.scss";
import { Field } from "formik";
import crossIcon from "../../../../images/cross.svg";
import searchIcon from "../../../../images/search-icon.svg";
import { Icon } from "../../../../shared/ui/icon";
import { SearchTips } from "../../../../entities/search-tips";
import { useStore } from "../../../../shared/lib/hooks";
import { ProductSearchCategories } from "../../../../entities/SearchGroup/product-search-categories/ui/ui";
import { SearchResultContent } from "../../../../entities/SearchGroup/search-result-content";
import { ViewAllSearchResults } from "../../../../entities/view-all-search-results/ui";

type PropsType = {
    clickableZoneRef: React.RefObject<HTMLInputElement>,
    isFixedSearchOpen: boolean,
    closeFixedSearch: React.MouseEventHandler<Element>
    openFixedSearch: Function,
}

//TODO add position absolute to fixed-search-form-wrapper insted of fixed-search-form

const searchTipsItems = [{ title: "lerka", href: "https://www.youtube.com/watch?v=GrPZXPdFK6M&t=282s" }, { title: "vlad", href: "https://www.youtube.com/watch?v=l2COvMmFbuI" }];

export function FixedSearchForm({ clickableZoneRef, isFixedSearchOpen, openFixedSearch, closeFixedSearch }: PropsType) {
    const { searchQuery } = useStore(state => state.searchPage);

    return <div ref={clickableZoneRef} className={`fixed-search-wrapper ${!isFixedSearchOpen ? "display-none" : ""}`}>
        <div className={`fixed-search ${!isFixedSearchOpen ? "hidden" : ""}`}>
            <Icon icon={searchIcon} className="search-icon" />
            <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по более 500 000 товаров" type="text" name="search" />
            <Icon onClick={closeFixedSearch} className="cross-icon" icon={crossIcon} />
        </div>

        <div className="search-results">
            <SearchTips items={searchTipsItems} searchQuery={searchQuery} />
            <ProductSearchCategories />
            <SearchResultContent/>
            <ViewAllSearchResults onClick={closeFixedSearch}/>
        </div>
    </div>
}