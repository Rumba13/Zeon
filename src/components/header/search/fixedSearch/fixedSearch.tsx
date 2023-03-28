import { Field } from "formik";
import { ICONS } from "../../../../images/images";
import Icon from "../../../icon/icon";
import "./fixedSearch.scss";

type PropsType = {
    fixedSearchRef: React.RefObject<HTMLInputElement>,
    isFixedSearchOpen: boolean,
    openFixedSearch: Function,
    closeFixedSearch: React.MouseEventHandler<Element>
}

export default function FixedSearch({ fixedSearchRef, isFixedSearchOpen, openFixedSearch, closeFixedSearch }: PropsType) {

    return <div ref={fixedSearchRef} className={`fixed-search ${!isFixedSearchOpen ? "hidden" : ""}`}>
        <Icon icon={ICONS.search} className="search-icon" />
        <Field onFocus={openFixedSearch} className="search__form" placeholder="Поиск по более 500 000 товаров" type="text" name="search" />
        <Icon onClick={closeFixedSearch} className="cross-icon" icon={ICONS.cross} />
    </div>
}