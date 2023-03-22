import "./searchForm.scss";
import Icon from "../../icon/icon";
import { ICONS } from "../../../images/images";
import { useRef } from "react";
import { useSearchForm } from "./useSearchForm";

export default function SearchForm() {
    const fixedSearchRef = useRef<HTMLInputElement>(null);
    const { isFixedSearchHidden, isSearchHidden, openFixedSearch,closeFixedSearch } = useSearchForm(fixedSearchRef);

    return <>
        <div className={`search ${isSearchHidden ? "hidden" : ""}`}>
            <input onFocus={openFixedSearch} className="search__form" placeholder="Поиск по каталогу" type="text" />
            <Icon icon={ICONS.search} className="search-icon" /> {/* TODO component?? */}
        </div>
        <div ref={fixedSearchRef} className={`fixed-search ${isFixedSearchHidden ? "hidden" : ""}`}>
            <Icon icon={ICONS.search} className="search-icon" />
            <input ref={input => input?.focus()} className="search__form" placeholder="Поиск по более 500 000 товаров" type="text" />
            <Icon onClick={closeFixedSearch} className="cross-icon" icon={ICONS.cross} />
        </div>
    </>

}