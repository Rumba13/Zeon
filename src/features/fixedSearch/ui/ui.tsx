import "./styles.scss";
import { Field } from "formik";
import { ICONS } from "../../../images/images";
import { Icon } from "../../../shared/ui/icon";
import { SearchTips } from "../../../entities/SearchPageGroup/search-tips";
import { useStore } from "../../../shared/lib/hooks";
import { ProductSearchCategories } from "../../../entities/SearchGroup/product-search-categories/ui/ui";

type PropsType = {
    clickableZoneRef: React.RefObject<HTMLInputElement>,
    isFixedSearchOpen: boolean,
    closeFixedSearch: React.MouseEventHandler<Element>
    openFixedSearch: Function,
}

//TODO add position absolute to fixed-search-wrapper insted of fixed-search

const searchTipsItems = [{ title: "lerka", href: "https://www.youtube.com/watch?v=GrPZXPdFK6M&t=282s" }, { title: "vlad", href: "https://www.youtube.com/watch?v=l2COvMmFbuI" }];

export function FixedSearch({ clickableZoneRef, isFixedSearchOpen, openFixedSearch, closeFixedSearch }: PropsType) {
    const { searchQuery } = useStore(state => state.searchPage);

    return <div ref={clickableZoneRef} className={`fixed-search-wrapper ${!isFixedSearchOpen ? "display-none" : ""}`}>
        <div className={`fixed-search ${!isFixedSearchOpen ? "hidden" : ""}`}>
            <Icon icon={ICONS.search} className="search-icon" />
            <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по более 500 000 товаров" type="text" name="search" />
            <Icon onClick={closeFixedSearch} className="cross-icon" icon={ICONS.cross} />
        </div>

        <div className="search-results">
            <SearchTips items={searchTipsItems} searchQuery={searchQuery} />

            <ProductSearchCategories />

            <div className="search-results-content">РезультPP</div>
        </div>
    </div>
}