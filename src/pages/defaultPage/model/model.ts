import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SyntheticEvent } from "react"
import { LoadingStatus } from "../../../shared/loadingStatus"
import { AdvertisingBannerDto, DefaultPageDto, MiniProductDto, ProductSelectionDto, SliderItemDto } from "../libs/dtos"
import DefaultPageRepository from "../api/repository"
import DefaultPageService from "../api/service"

export type DefaultPageStateType = {
    productSelections?: ProductSelectionDto[]
    advertisingBanner?: AdvertisingBannerDto
    products?: MiniProductDto[]
    sliderItems?: SliderItemDto[]
}

const defaultPageService = new DefaultPageService(new DefaultPageRepository());

const initialState: DefaultPageStateType = {
}

const defaultPageSlice = createSlice({
    name: "defaultPage",
    initialState,
    reducers: {
        setDefaultPageData(state: DefaultPageStateType, action: PayloadAction<DefaultPageDto>) {
            const { advertisingBanner, products, productSelections } = action.payload;
            state.advertisingBanner = advertisingBanner;
            state.products = products;
            state.productSelections = productSelections;
        },
        setAdvertisingBanner(state: DefaultPageStateType, action: PayloadAction<AdvertisingBannerDto>) {
            state.advertisingBanner = action.payload
        },
        setDefaultProducts(state: DefaultPageStateType, action: PayloadAction<MiniProductDto[]>) {
            state.products = action.payload
        },
        setProductSelections(state: DefaultPageStateType, action: PayloadAction<ProductSelectionDto[]>) {
            state.productSelections = action.payload
        },
        setBannerSliderItems(state: DefaultPageStateType, action: PayloadAction<SliderItemDto[]>) {
            state.sliderItems = action.payload
        },
    },
    extraReducers(builder) {
    },
})

export const loadAdvertisingBannerThunk = createAsyncThunk("defaultPage/loadAdvertisingBannerThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const advertisingBanner = await defaultPageService.getAdvertisingBanner();
        thunkAPI.dispatch(setAdvertisingBanner(advertisingBanner))
    });
export const loadDefaultProductsThunk = createAsyncThunk("defaultPage/loadDefaultProductsThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const products = await defaultPageService.getDefaultProducts();
        thunkAPI.dispatch(setDefaultProducts(products))
    });
export const loadProductSelectionsThunk = createAsyncThunk("defaultPage/loadProductSelectionsThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const productSelections = await defaultPageService.getProductSelections();
        thunkAPI.dispatch(setProductSelections(productSelections))
    });
export const loadSliderItemsThunk = createAsyncThunk("defaultPage/loadSliderItemsThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const sliderItems = await defaultPageService.getSliderItems();
        thunkAPI.dispatch(setBannerSliderItems(sliderItems));
    });


const { setDefaultProducts, setAdvertisingBanner, setProductSelections, setBannerSliderItems } = defaultPageSlice.actions;
export default defaultPageSlice.reducer;