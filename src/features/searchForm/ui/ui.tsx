import "./styles.scss";
import { Field } from "formik";
import BigSearchIcon from "../../../images/searchBig.png"
import Icon from "../../../components/icon/icon";
import { ICONS } from "../../../images/images";
import useBreakpoint from "../../../shared/useBreakpoint";

type PropsType = {
    isFixedSearchOpen: boolean,
    openFixedSearch: Function
}

export function SearchForm({ isFixedSearchOpen, openFixedSearch }: PropsType) {
    const adaptiveComponents = useBreakpoint(
        <div className={`search ${!isFixedSearchOpen ? "opened" : ""}`}>
            <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по каталогу" type="text" name="search" />
            <Icon icon={ICONS.search} className="search-icon" /> {/* TODO component?? */}
        </div>
    );
    
    adaptiveComponents.addBreakpoint(650,
        <Icon onClick={openFixedSearch} icon={BigSearchIcon} className="search-icon" />
    )
   
    return adaptiveComponents.getComponent()
}