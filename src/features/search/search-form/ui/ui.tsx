import "./styles.scss";
import { Field } from "formik";
import BigSearchIcon from "../../../../images/searchBig.png"
import SearchIcon from "../../../../images/search-icon.svg";
import useBreakpoint from "../../../../shared/lib/use-breakpoint";
import { Icon } from "../../../../shared/ui/icon";

type PropsType = {
    isFixedSearchOpen: boolean,
    openFixedSearch: Function
}

export function SearchForm({ isFixedSearchOpen, openFixedSearch }: PropsType) {
    const adaptiveComponents = useBreakpoint(
        <div className={`search ${!isFixedSearchOpen ? "opened" : ""}`}>
            <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по каталогу" type="text" name="search" />
            <Icon onClick={openFixedSearch} icon={SearchIcon} className="search-icon" />
        </div>
    );
    
    adaptiveComponents.addBreakpoint(650,
        <Icon onClick={openFixedSearch} icon={BigSearchIcon} className="search-icon" />
    )
   
    return adaptiveComponents.getComponent()
}