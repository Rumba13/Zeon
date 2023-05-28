import { createAsyncThunk } from "@reduxjs/toolkit";
import { SyntheticEvent } from "react";
import { defaultPageService, setAdvertisingBanner } from "../../../../pages/defaultPage";

export const loadAdvertisingBannerThunk = createAsyncThunk("defaultPage/loadAdvertisingBannerThunk",
    async (_: SyntheticEvent | void, thunkAPI) => {
        const advertisingBanner = await defaultPageService.getAdvertisingBanner();
        thunkAPI.dispatch(setAdvertisingBanner(advertisingBanner))
    });