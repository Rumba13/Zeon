export type FiltersType = {
    sortBy: SortByType
    sortType: SortType
}

export type SortByType = "name" | "popularity" | "price";
export type SortType = "asc" | "desc";