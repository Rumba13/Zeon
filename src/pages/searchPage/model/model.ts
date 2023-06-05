import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SyntheticEvent } from "react";
import { PaginatorDto, SelectionProductDto, SelectionTagDto, SelectionTitleDto } from "../lib/dtos";
import ProductSelectionPageRepository from "../api/repository";
import ProductSelectionPageService from "../api/service";

export type ProductSelectionPageStateType = {
    selectionTags?: SelectionTagDto[],
    products?: SelectionProductDto[],
    title?: SelectionTitleDto,
    paginator: PaginatorDto
}

const initialState: ProductSelectionPageStateType = {
    paginator: {
        currentPage: 1,
        pagesCount: 40
    }
}

const productSelectionPageService = new ProductSelectionPageService(new ProductSelectionPageRepository());

const productSelectionPageSlice = createSlice({
    name: "productSelectionPage",
    initialState,
    reducers: {
        setSelectionTags(state: ProductSelectionPageStateType, action: PayloadAction<SelectionTagDto[]>) {
            state.selectionTags = action.payload
        },
        setSelectionProducts(state: ProductSelectionPageStateType, action: PayloadAction<SelectionProductDto[]>) {
            state.products = action.payload
        },
        setSelectionTitle(state: ProductSelectionPageStateType, action: PayloadAction<SelectionTitleDto>) {
            state.title = action.payload
        },
        setCurrentPage(state: ProductSelectionPageStateType, action: PayloadAction<number>) {
            state.paginator.currentPage = action.payload
        },
        setPagesCount(state: ProductSelectionPageStateType, action: PayloadAction<number>) {
            state.paginator.pagesCount = action.payload
        },
    }
})

export const loadSelectionTagsThunk = createAsyncThunk("productSelectionPage/loadSelectionTagsThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const selectionTags = await productSelectionPageService.loadSelectionTags();
        thunkApi.dispatch(setSelectionTags(selectionTags));
    })

export const loadSelectionProductsThunk = createAsyncThunk("productSelectionPage/loadSelectionProductsThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const products = await productSelectionPageService.loadSelectionProducts();
        thunkApi.dispatch(setSelectionProducts(products));
    })

export const loadSelectionTitleThunk = createAsyncThunk("productSelectionPage/loadSelectionTitleThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const title = await productSelectionPageService.loadSelectionTitle();
        thunkApi.dispatch(setSelectionTitle(title));
    })
export const loadPaginatorThunk = createAsyncThunk("productSelectionPage/loadPaginatorThunk",
    async (_: SyntheticEvent | void, thunkApi) => {
        const paginator = await productSelectionPageService.loadPaginator();
        thunkApi.dispatch(setPagesCount(paginator.pagesCount))
    })


const { setSelectionProducts, setSelectionTags, setSelectionTitle, setCurrentPage, setPagesCount, } = productSelectionPageSlice.actions;

export { setCurrentPage, setPagesCount, }
export default productSelectionPageSlice.reducer;