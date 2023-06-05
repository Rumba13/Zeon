import "./styles.scss";
import { useRating } from "../lib/useRating";

type PropsType = {}

export function Rating({ }: PropsType) { //TODO refuck
    const { highlightStarsRef, activeStarCount, setRating } = useRating();

    return <div className="rating-wrapper">
        <span className="rating__title">Рейтинг:</span>
        <div className="rating">
            <div className="rating__minus" onClick={() => setRating(activeStarCount - 1)}>-</div>
            <div className="rating__star-count">{activeStarCount}</div>
            <div className="rating__plus" onClick={() => setRating(activeStarCount + 1)}>+</div>
        </div>
        <div className="rating-stars">
            <div ref={highlightStarsRef} className="rating-stars-active"></div>
        </div>
    </div>
}