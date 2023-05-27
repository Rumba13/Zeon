import { createAsyncThunk } from "@reduxjs/toolkit";
import { SyntheticEvent } from "react";
import { defaultPageService, setDefaultProducts } from "../../../../pages/defaultPage";

export const loadDefaultProductsThunk = createAsyncThunk("defaultPage/loadDefaultProductsThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const products = await defaultPageService.getDefaultProducts();
        thunkAPI.dispatch(setDefaultProducts(products))
    });