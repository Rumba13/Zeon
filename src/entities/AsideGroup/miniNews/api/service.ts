import { serverConnection } from "../../../../shared/api/serverConnection";

class MiniNewsService {
    constructor(){}

    public async getMiniNews() {
        return (await serverConnection.get("/mini-news")).data;
    }
}

export const miniNewsService = new MiniNewsService();