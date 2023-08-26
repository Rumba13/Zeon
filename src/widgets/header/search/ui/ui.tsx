import "./styles.scss";
import { useRef } from "react";
import { useSearchForm } from "../lib/useSearch";
import { Formik } from "formik";
import { SearchForm } from "../../../../features/searchForm";
import { FixedSearch } from "../../../../features/fixedSearch";
import { useStore } from "../../../../shared/lib/hooks";

export function Search() {
    const clickableZoneRef = useRef<HTMLInputElement>(null);
    const { openFixedSearch, closeFixedSearch, isFixedSearchOpen } = useSearchForm(clickableZoneRef);
    const { setSearchQuery } = useStore(state => state.searchPage);


    return <Formik validate={(values) => { setSearchQuery(values.search); return {} }} onSubmit={() => { }} initialValues={{ search: "" }}>
        {({ }) =>
            <>
                <SearchForm isFixedSearchOpen={isFixedSearchOpen} openFixedSearch={openFixedSearch} />
                <FixedSearch closeFixedSearch={closeFixedSearch} openFixedSearch={openFixedSearch} clickableZoneRef={clickableZoneRef} isFixedSearchOpen={isFixedSearchOpen} />
            </>
        }
    </Formik>
}