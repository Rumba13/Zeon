import { RefObject, useState } from "react";

export function useSearchForm(fixedSearchRef: RefObject<HTMLDivElement>) {
    const [isFixedSearchOpen, setIsFixedSearchOpen] = useState(false);

    function closeFixedSearchIfClickOutside(e: Event) {
        if (!fixedSearchRef.current?.contains(e.target as HTMLElement)) {
            closeFixedSearch()
        }
            console.log(1)
    }
    function openFixedSearch() {
        setIsFixedSearchOpen(true);

        setTimeout(() => document.addEventListener("click", closeFixedSearchIfClickOutside), 100)
    }
    function closeFixedSearch() {
        setIsFixedSearchOpen(false);
        document.removeEventListener("click", closeFixedSearchIfClickOutside)
    }
    function onSubmit() {

    }

    return { openFixedSearch, closeFixedSearch, onSubmit, isFixedSearchOpen }
}