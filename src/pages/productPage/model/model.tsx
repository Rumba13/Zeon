import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoadingStatus } from "../../../shared/loadingStatus"
import { ProductDto } from "../libs/dtos";
import ProductPageRepository from "../api/repository"
import ProductPageService from "../api/service"

const productPageService = new ProductPageService(new ProductPageRepository()); //TODO Di container (awilix)

export type ProductPageState = {
    loadingStatus: LoadingStatus.idle,
    id: number,
    title: string,
    price: number,
    discountPrice: number,
    photos: string[],
    manufacturer: string,
    batch: string,
    guaranteeMonths: number,
    creditPriceInMonth: number
} | {
    loadingStatus: LoadingStatus.loading | LoadingStatus.failed
    id?: number,
}

const initialState: ProductPageState = {
    loadingStatus: LoadingStatus.loading
}

export const productPageSlice = createSlice({
    name: "productPage",
    initialState,
    reducers: {
        setProductPageStatus(state: ProductPageState, action: PayloadAction<LoadingStatus>) {
            state.loadingStatus = action.payload;
        },
        setProductPageId(state: ProductPageState, action: PayloadAction<number>) {
            state.id = action.payload;
        },
        setProduct(state: ProductPageState, action: PayloadAction<ProductDto>) {
            return { ...state, ...action.payload, loadingStatus: LoadingStatus.loading };
        },
    }
})

export const getProductByIdThunk = createAsyncThunk("productPage/getProductById",
    async (id: number, thunkAPI) => {
        const product = await productPageService.getProductById(id);
        thunkAPI.dispatch(setProduct(product));
        thunkAPI.dispatch(setProductPageStatus(LoadingStatus.idle));
    }
)

const { setProductPageStatus, setProductPageId, setProduct } = productPageSlice.actions;
export { setProductPageId };
export default productPageSlice.reducer;