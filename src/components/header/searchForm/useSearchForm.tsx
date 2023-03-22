import { RefObject, useState } from "react";

export function useSearchForm(fixedSearchRef: RefObject<HTMLDivElement>) {
    const [isSearchHidden, setIsSearchHidden] = useState(false);
    const [isFixedSearchHidden, setIsFixedSearchHidden] = useState(true);

    function closeFixedSearchIfClickOutside(e: Event) {
        if (!fixedSearchRef.current?.contains(e.target as HTMLElement)) {
            closeFixedSearch()
        }
    }
    function openFixedSearch() {
        setIsSearchHidden(true);
        setIsFixedSearchHidden(false);

        setTimeout(() => document.addEventListener("click", closeFixedSearchIfClickOutside), 100)
    }
    function closeFixedSearch() {
        setIsSearchHidden(false);
        setIsFixedSearchHidden(true);
        document.removeEventListener("click", closeFixedSearchIfClickOutside)
    }

    return { isSearchHidden, isFixedSearchHidden, openFixedSearch, closeFixedSearch }
}