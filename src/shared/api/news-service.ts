import {serverConnection} from "./server-connection";
import {NewsType} from "./types/news-type";

class NewsService {
    constructor() {
    }

    public async getMiniNews() {
        return (await serverConnection.get("/mini-news")).data;
    }

    public async getNewsById(id: number): Promise<NewsType> {
        return (await serverConnection.get("/news", {params: {id}})).data;
    }
}

export const newsService = new NewsService();