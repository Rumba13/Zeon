type SearchTipTitleType = {
    partBeforeHighlight: string,
    highlightedPart: string,
    partAfterHighlight: string,
}


export function getSearchTipHighlightedTitle(title: string, searchQuery: string): SearchTipTitleType {
    const highlightStart = title.indexOf(searchQuery);
    let partBeforeHighlight = "";
    let highlightedPart = "";
    let partAfterHighlight = "";


    if (highlightStart === -1) {
        //This is cant be
        return { highlightedPart: "", partAfterHighlight: title, partBeforeHighlight: "" }
    }

    highlightedPart = searchQuery

    partBeforeHighlight = title.substring(0, highlightStart);
    partAfterHighlight = title.substring(highlightStart + searchQuery.length);

    return { highlightedPart, partBeforeHighlight, partAfterHighlight }
}