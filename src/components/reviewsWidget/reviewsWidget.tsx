import "./reviewsWidget.css";

export default function ReviewsWidget() {
    return <div className="reviews-wrapper">
        <h2 className="reviews__title">Отзывы о магазине:</h2>
        <div className="reviews__review-part">Отличный магазин, прекрасный сервис. Очень приветливый персонал - всегда все расскажут и покажут. Огромное спасибо оператору Игорю! Очень грамотно проконсультировал, находит правильный подход к клиенту. Отлично разбирается в товаре! С Вами приятно работать!</div>
       
        <span className="reviews__make-review-btn">Оставить отзыв</span>{/* ! icontext */}
        <span className="reviews__all-reviews">Все отзывы</span>
    </div>
}