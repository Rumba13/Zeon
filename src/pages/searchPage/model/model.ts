import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SyntheticEvent } from "react";
import { PaginatorDto, SearchProductDto, SearchTagDto, SearchPageTitleDto } from "../lib/dtos";
import SearchPageRepository from "../api/repository";
import SearchPageService from "../api/service";

export type SearchPageStateType = {
    searchTags?: SearchTagDto[],
    products?: SearchProductDto[],
    title?: SearchPageTitleDto,
    paginator: PaginatorDto
}

const initialState: SearchPageStateType = {
    paginator: {
        currentPage: 1,
        pagesCount: 40
    }
}

const searchPageService = new SearchPageService(new SearchPageRepository());

const searchPageSlice = createSlice({
    name: "searchPage",
    initialState,
    reducers: {
        setSearchTags(state: SearchPageStateType, action: PayloadAction<SearchTagDto[]>) {
            state.searchTags = action.payload
        },
        setSearchProducts(state: SearchPageStateType, action: PayloadAction<SearchProductDto[]>) {
            state.products = action.payload
        },
        setSearchTitle(state: SearchPageStateType, action: PayloadAction<SearchPageTitleDto>) {
            state.title = action.payload
        },
        setCurrentPage(state: SearchPageStateType, action: PayloadAction<number>) {
            state.paginator.currentPage = action.payload
        },
        setPagesCount(state: SearchPageStateType, action: PayloadAction<number>) {
            state.paginator.pagesCount = action.payload
        }
    }
})

export const loadSearchTagsThunk = createAsyncThunk("searchPage/loadSearchTagsThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const searchTags = await searchPageService.loadSearchTags();
        thunkApi.dispatch(setSearchTags(searchTags));
    })

export const loadSearchProductsThunk = createAsyncThunk("searchPage/loadSearchProductsThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const products = await searchPageService.loadSearchProducts();
        thunkApi.dispatch(setSearchProducts(products));
    })

export const loadSearchTitleThunk = createAsyncThunk("searchPage/loadSearchTitleThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const title = await searchPageService.loadSearchTitle();
        thunkApi.dispatch(setSearchTitle(title));
    })

export const loadPaginatorThunk = createAsyncThunk("searchPage/loadPaginatorThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const paginator = await searchPageService.loadPaginator();
        thunkApi.dispatch(setPagesCount(paginator.pagesCount))
    })

const { setSearchProducts, setSearchTags, setSearchTitle, setCurrentPage, setPagesCount, } = searchPageSlice.actions;

export { setCurrentPage, setPagesCount }
export default searchPageSlice.reducer;