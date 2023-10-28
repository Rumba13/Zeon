import "./styles.scss";
import {Field} from "formik";
import {Icon} from "../../../../shared/ui/icon";
import {SearchTips} from "../../../../entities/SearchGroup/search-tips";
import {ProductSearchCategories} from "../../../../entities/SearchGroup/product-search-categories/ui/ui";
import {SearchResultContent} from "../../../../entities/SearchGroup/search-result-content";
import {ViewAllSearchResults} from "../../../../entities/SearchGroup/view-all-search-results/ui";
import {searchState} from "../../search";
import crossIcon from "../../../../images/cross.svg";
import searchIcon from "../../../../images/search-icon.svg";

type PropsType = {
    clickableZoneRef: React.RefObject<HTMLInputElement>,
    isFixedSearchOpen: boolean,
    closeFixedSearch: React.MouseEventHandler<Element>
    openFixedSearch: Function,
}

const searchTipsItems = [
    {
        title: "lerka",
        href: "https://www.youtube.com/watch?v=GrPZXPdFK6M&t=282s"
    },
    {
        title: "vlad",
        href: "https://www.youtube.com/watch?v=l2COvMmFbuI"
    }];

export function FixedSearchForm({clickableZoneRef, isFixedSearchOpen, openFixedSearch, closeFixedSearch}: PropsType) {
    const {searchQuery} = searchState;

    return <div ref={clickableZoneRef} className={`fixed-search-wrapper ${!isFixedSearchOpen ? "display-none" : ""}`}>
        <div className={`fixed-search ${!isFixedSearchOpen ? "hidden" : ""}`}>
            <Icon icon={searchIcon} className="search-icon"/>
            <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по более 500 000 товаров"
                   type="text" name="search"/>
            <Icon onClick={closeFixedSearch} className="cross-icon" icon={crossIcon}/>
        </div>

        <div className="search-results">
            <SearchTips items={searchTipsItems} searchQuery={searchQuery}/>
            <ProductSearchCategories/>
            <SearchResultContent/>
            <ViewAllSearchResults onClick={closeFixedSearch}/>
        </div>
    </div>
}