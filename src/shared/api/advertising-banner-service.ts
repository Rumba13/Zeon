import { BannerType } from "./types/banner-type";
import { serverConnection } from "./server-connection";

class AdvertisingBannerService {
    constructor() { }

    public async getBanner(): Promise<BannerType> {
        return (await serverConnection.get("/aside-advertising-banner")).data;
    }
}

export const advertisingBannerService = new AdvertisingBannerService();