import { serverConnection } from "../../../shared/api/server-connection";

class MiniNewsService {
    constructor(){}

    public async getMiniNews() {
        return (await serverConnection.get("/mini-news")).data;
    }
}

export const miniNewsService = new MiniNewsService();