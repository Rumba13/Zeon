import Sprite from "../sprite/sprite";
import "./reviewsWidget.css";

export default function ReviewsWidget() { //TODO:separate to components
    return <div className="reviews">
        <h2 className="reviews__title">Отзывы о магазине:</h2>
        <div className="reviews__review-part">Отличный магазин, прекрасный сервис. Очень приветливый персонал - всегда все расскажут и покажут. Огромное спасибо оператору Игорю! Очень грамотно проконсультировал, находит правильный подход к клиенту. Отлично разбирается в товаре! С Вами приятно работать!</div>

        <div className="reviews-buttons">
            <div className="make-review-btn review-btn">
                <Sprite yOffset={-494} />
                <span className="make-review-btn__text">Оставить отзыв</span>
            </div>
            <div className="all-reviews-btn review-btn">
                <span className="all-reviews-btn__text">Все отзывы</span>
            </div>
        </div>

    </div>
}