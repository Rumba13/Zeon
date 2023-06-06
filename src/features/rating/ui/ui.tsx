import "./styles.scss";
import { useRating } from "../lib/useRating";

type PropsType = {}

export function Rating({ }: PropsType) {
    const { highlightedStarsRef, ratingValue, setRating } = useRating();

    return <div className="rating-wrapper">
        <span className="rating__title">Рейтинг:</span>
        <div className="rating">
            <div className="rating__minus" onClick={() => setRating(ratingValue - 1)}>-</div>
            <div className="rating__star-count">{ratingValue}</div>
            <div className="rating__plus" onClick={() => setRating(ratingValue + 1)}>+</div>
        </div>
        <div className="rating-stars">
            <div ref={highlightedStarsRef} className="rating-stars-active"></div>
        </div>
    </div>
}