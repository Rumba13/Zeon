import "./styles.scss";
import { useRef } from "react";
import { useSearchForm } from "../lib/useSearch";
import { Formik } from "formik";
import { useStore } from "../../../../shared/lib/hooks";
import { SearchForm } from "../../../../features/search/search-form";
import { FixedSearchForm } from "../../../../features/search/fixed-search-form";

export function Search() {
    const clickableZoneRef = useRef<HTMLInputElement>(null);
    const { openFixedSearch, closeFixedSearch, isFixedSearchOpen } = useSearchForm(clickableZoneRef);
    const { setSearchQuery } = useStore(state => state.searchPage);


    return <Formik validate={(values) => { setSearchQuery(values.search); return {} }} onSubmit={() => { }} initialValues={{ search: "" }}>
        {({ }) =>
            <>
                <SearchForm isFixedSearchOpen={isFixedSearchOpen} openFixedSearch={openFixedSearch} />
                <FixedSearchForm closeFixedSearch={closeFixedSearch} openFixedSearch={openFixedSearch} clickableZoneRef={clickableZoneRef} isFixedSearchOpen={isFixedSearchOpen} />
            </>
        }
    </Formik>
}