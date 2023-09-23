import "./styles.scss";
import { useEffect, useState } from "react";
import { miniReviewService } from "../api/service";
import { LeaveReview } from "./leave-review";
import { AllReview } from "./all-reviews";

export function MiniReview() {
    const [review, setReview] = useState<string | undefined>()

    useEffect(() => {
        miniReviewService.getReview().then(setReview);
    }, [miniReviewService])

    if (review === undefined) {
        return <></>
    }

    return <div className="single-review">
        <h2 className="single-review__title">Отзывы о магазине:</h2>
        <div className="single-review__part">{review}</div>
        <div className="review-actions">
            <LeaveReview />
            <AllReview />
        </div>
    </div>
}