import { serverConnection } from "../../../../shared/api/server-connection";

class MiniReviewService {
    constructor() { }

    public async getReview() {
        return (await serverConnection.get("/mini-review")).data;
    }
}


export const miniReviewService = new MiniReviewService();