import "./search.scss";
import { useRef } from "react";
import { useSearchForm } from "./useSearch";
import { Formik, Field } from "formik";
import FixedSearch from "./fixedSearch/fixedSearch";
import SearchForm from "./searchForm/searchForm";

export default function Search() {
    const fixedSearchRef = useRef<HTMLInputElement>(null);
    const { openFixedSearch, closeFixedSearch, onSubmit, isFixedSearchOpen } = useSearchForm(fixedSearchRef);

    return <Formik onSubmit={onSubmit} initialValues={{ search: "" }}>
        {() => 
            <>
                <SearchForm isFixedSearchOpen={isFixedSearchOpen} openFixedSearch={openFixedSearch} />
                <FixedSearch closeFixedSearch={closeFixedSearch} openFixedSearch={openFixedSearch} fixedSearchRef={fixedSearchRef} isFixedSearchOpen={isFixedSearchOpen} />
            </>
        }
    </Formik>
}