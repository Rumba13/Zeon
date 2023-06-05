import "./styles.scss";
import { AllReview } from "../../allReviews";
import { LeaveReview } from "../../leaveReview";

export function MiniReview() {
    return <div className="single-review">
        <h2 className="single-review__title">Отзывы о магазине:</h2>
        <div className="single-review__part">Отличный магазин, прекрасный сервис. Очень приветливый персонал - всегда все расскажут и покажут. Огромное спасибо оператору Игорю! Очень грамотно проконсультировал, находит правильный подход к клиенту. Отлично разбирается в товаре! С Вами приятно работать!</div>
        <div className="single-review-activities">
            <LeaveReview />
            <AllReview />
        </div>
    </div>
}