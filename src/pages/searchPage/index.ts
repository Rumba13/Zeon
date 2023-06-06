export {
    loadSearchProductsThunk,
    loadSearchTagsThunk,
    loadSearchTitleThunk,
    setCurrentPage,
    setPagesCount,
    default as searchPageReducer,
    loadPaginatorThunk,
} from "./model/model";

export {SearchPage} from "./ui/ui"

export type {SearchPageStateType} from "./model/model" 