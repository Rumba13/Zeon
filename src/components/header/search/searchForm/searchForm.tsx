import "./searchForm.scss";
import Icon from "../../../icon/icon";
import { Field } from "formik";
import { ICONS } from "../../../../images/images";

type PropsType = {
    isFixedSearchOpen:boolean,
    openFixedSearch:Function
}

export default function Search({isFixedSearchOpen,openFixedSearch}:PropsType) {
    return <div className={`search ${isFixedSearchOpen ? "hidden" : ""}`}>
    <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по каталогу" type="text" name="search" />
    <Icon icon={ICONS.search} className="search-icon" /> {/* TODO component?? */}
</div>
}