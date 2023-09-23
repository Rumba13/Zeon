import {BannerType} from "../../../../shared/api/types/banner-type";
import {serverConnection} from "../../../../shared/api/server-connection";

class HomePageBannerService {
    constructor() {}
    public async loadHomePageBanner(): Promise<BannerType> {
        return await (await serverConnection.get("/advertising-banner")).data;
    }
}
