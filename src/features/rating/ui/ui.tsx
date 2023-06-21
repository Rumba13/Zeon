import "./styles.scss";
import { useRating } from "../lib/useRating";
import { useEffect } from "react";

type PropsType = {
    setRating: (rating: number) => any,
    rating: number
}

export function Rating({ rating, setRating: _setRating }: PropsType) {
    const { highlightingStarsRef, setRating } = useRating(_setRating);

    useEffect(() => {
        setRating(rating)
    }, [setRating, rating])

    return <div className="rating-wrapper">
        <span className="rating__title">Рейтинг:</span>
        <div className="rating">
            <div className="rating__minus" onClick={() => setRating(rating - 1)}>-</div>
            <div className="rating__star-count">{rating}</div>
            <div className="rating__plus" onClick={() => setRating(rating + 1)}>+</div>
        </div>
        <div className="rating-stars">
            <div ref={highlightingStarsRef} className="rating-stars-active"></div>
        </div>
    </div>
}