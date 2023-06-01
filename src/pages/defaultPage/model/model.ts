import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AdvertisingBannerDto, DefaultPageDto, MiniProductDto, ProductSelectionDto, SliderItemDto } from "../libs/dtos"
import DefaultPageRepository from "../api/repository"
import DefaultPageService from "../api/service"

export type DefaultPageStateType = {
    productSelections?: ProductSelectionDto[]
    advertisingBanner?: AdvertisingBannerDto
    products?: MiniProductDto[]
    sliderItems?: SliderItemDto[]
}

export const defaultPageService = new DefaultPageService(new DefaultPageRepository());

const initialState: DefaultPageStateType = {}

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
    }
})

export const { setDefaultProducts, setAdvertisingBanner, setProductSelections, setBannerSliderItems } = defaultPageSlice.actions;
export default defaultPageSlice.reducer;