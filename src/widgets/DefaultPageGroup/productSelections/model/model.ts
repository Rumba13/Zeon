import { createAsyncThunk } from "@reduxjs/toolkit";
import { SyntheticEvent } from "react";
import { defaultPageService, setProductSelections } from "../../../../pages/defaultPage";

export const loadProductSelectionsThunk = createAsyncThunk("defaultPage/loadProductSelectionsThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const productSelections = await defaultPageService.getProductSelections();
        thunkAPI.dispatch(setProductSelections(productSelections))
    });