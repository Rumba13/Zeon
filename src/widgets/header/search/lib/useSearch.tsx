import { RefObject, useState } from "react";

export function useSearchForm(fixedSearchRef: RefObject<HTMLDivElement>) {
    const [isFixedSearchOpen, setIsFixedSearchOpen] = useState(false);

    function closeFixedSearchIfClickOutside(e: Event) {
        console.log(e.target)
        if (!fixedSearchRef.current?.contains(e.target as HTMLElement)) {
            closeFixedSearch()
        }
    }
    function openFixedSearch() {
        setIsFixedSearchOpen(true);
        setTimeout(() => document.addEventListener("click", closeFixedSearchIfClickOutside, { once: true }), 100)
    }
    function closeFixedSearch() {
        setIsFixedSearchOpen(false);
    }

    return { openFixedSearch, closeFixedSearch, isFixedSearchOpen }
}