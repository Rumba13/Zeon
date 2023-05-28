import { createAsyncThunk } from "@reduxjs/toolkit";
import { SyntheticEvent } from "react";
import { defaultPageService, setBannerSliderItems } from "../../../../pages/defaultPage";

export const loadSliderItemsThunk = createAsyncThunk("defaultPage/loadSliderItemsThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const sliderItems = await defaultPageService.getSliderItems();
        thunkAPI.dispatch(setBannerSliderItems(sliderItems));
    });