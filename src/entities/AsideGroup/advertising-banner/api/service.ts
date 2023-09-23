//TODO move to shared/advertising-banner/api
import { BannerType } from "../../../../shared/api/types/banner-type";
import { serverConnection } from "../../../../shared/api/server-connection";

class AdvertisingBannerService {
    constructor() { }

    public async getBanner(): Promise<BannerType> {
        return (await serverConnection.get("/aside-advertising-banner")).data;
    }
}

export const advertisingBannerService = new AdvertisingBannerService();