import "./styles.scss";
import {useRef} from "react";
import {useSearchForm} from "../lib/useSearch";
import {Formik} from "formik";
import {SearchForm} from "../../../../features/search/search-form";
import {FixedSearchForm} from "../../../../features/search/fixed-search-form";
import {searchState} from "../../../../features/search/search";

export function Search() {
    const clickableZoneRef = useRef<HTMLInputElement>(null);
    const {openFixedSearch, closeFixedSearch, isFixedSearchOpen} = useSearchForm(clickableZoneRef);

    return <Formik validate={
        (values) => {
            searchState.setSearchQuery(values.search);
            return {}
        }}
                   onSubmit={() => {
                   }}
                   initialValues={{search: ""}}>
        {({}) =>
            <>
                <SearchForm isFixedSearchOpen={isFixedSearchOpen} openFixedSearch={openFixedSearch}/>
                <FixedSearchForm closeFixedSearch={closeFixedSearch} openFixedSearch={openFixedSearch}
                                 clickableZoneRef={clickableZoneRef} isFixedSearchOpen={isFixedSearchOpen}/>
            </>
        }
    </Formik>
}