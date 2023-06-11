import { Sprite } from "../../../../shared/ui/sprite";
import "./styles.scss";

export function LeaveReview() {
    return <div className="review-action leave-review ">
        <Sprite yOffset={-494} />
        <span className="leave-review__text">Оставить отзыв</span>
    </div>
}