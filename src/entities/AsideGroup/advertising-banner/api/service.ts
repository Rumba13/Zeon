import { ICONS } from "../../../../images/images";
import { BannerDto } from "../../../../pages/defaultPage/libs/dtos"; //TODO move to shared/banner/api
import { serverConnection } from "../../../../shared/api/serverConnection";

class AdvertisingBannerService {
    constructor() { }

    public async getBanner(): Promise<BannerDto> {
        return (await serverConnection.get("/aside-advertising-banner")).data;
    }
}

export const advertisingBannerService = new AdvertisingBannerService();