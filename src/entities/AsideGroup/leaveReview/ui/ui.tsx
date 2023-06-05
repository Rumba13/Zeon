import { Sprite } from "../../../../shared/ui/sprite";
import "./styles.scss";

export function LeaveReview() {
    return <div className="leave-review single-review-activity">
        <Sprite yOffset={-494} />
        <span className="leave-review__text">Оставить отзыв</span>
    </div>
}