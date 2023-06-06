import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductDto } from "../libs/dtos";
import ProductPageRepository from "../api/repository"
import ProductPageService from "../api/service"

const productPageService = new ProductPageService(new ProductPageRepository()); //TOTHINK Di container (awilix)

export type ProductPageState = {
    product?:ProductDto
} 

const initialState: ProductPageState = {
}

export const productPageSlice = createSlice({
    name: "productPage",
    initialState,
    reducers: {
        setProductPageId(state: ProductPageState, action: PayloadAction<number>) {
            return {...state, urlId:action.payload}

        },
        setProduct(state: ProductPageState, action: PayloadAction<ProductDto>) {
            console.log(1)
            return {...state, product:action.payload}
        },
    }
})

export const getProductByIdThunk = createAsyncThunk("productPage/getProductById",
    async (id: number, thunkAPI) => {
        const product = await productPageService.getProductById(id);
        thunkAPI.dispatch(setProduct(product));
    }
)

const { setProductPageId, setProduct } = productPageSlice.actions;
export { setProductPageId };
export default productPageSlice.reducer;