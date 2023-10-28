import "./styles.scss";
import {Field} from "formik";
import {Icon} from "../../../../shared/ui/icon";
import {useScreenWidth} from "../../../../shared/lib/use-screen-width";
import BigSearchIcon from "../../../../images/searchBig.png"
import SearchIcon from "../../../../images/search-icon.svg";

type PropsType = {
    isFixedSearchOpen: boolean,
    openFixedSearch: Function
}

export function SearchForm({isFixedSearchOpen, openFixedSearch}: PropsType) {
    const screenWidth = useScreenWidth();

    if (screenWidth < 650) {
        return <Icon onClick={openFixedSearch} icon={BigSearchIcon} className="search-icon"/>
    }
    return <div className={`search ${!isFixedSearchOpen ? "opened" : ""}`}>
        <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по каталогу" type="text"
               name="search"/>
        <Icon onClick={openFixedSearch} icon={SearchIcon} className="search-icon"/>
    </div>
}