import Sprite from "../../sprite/sprite";
import "./leaveReview.scss";

export default function LeaveReview() {
    return <div className="leave-review single-review-activity">
        <Sprite yOffset={-494} />
        <span className="leave-review__text">Оставить отзыв</span>
    </div>
}