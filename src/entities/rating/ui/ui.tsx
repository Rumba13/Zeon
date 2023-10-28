import "./styles.scss";
import {setRatingAndUpdateStars} from "./set-rating";
import React, {useEffect} from "react";

type PropsType = {
    setRating: (rating: number) => any,
    rating: number
}

export function Rating({rating, setRating: setRatingInState}: PropsType) { //TODO add new rating system made by myself
    const activeStarsRef = React.createRef<HTMLDivElement>();
    const setRating = (rating: number) => setRatingAndUpdateStars(rating, setRatingInState, activeStarsRef);

    useEffect(() => {
        setRating(rating);
    }, [setRating, rating]);

    return <div className="rating-wrapper">
        <span className="rating__title">Рейтинг:</span>
        <div className="rating">
            <div className="rating__minus" onClick={() => setRating(rating - 1)}>-</div>
            <div className="rating__star-count">{rating}</div>
            <div className="rating__plus" onClick={() => setRating(rating + 1)}>+</div>
        </div>
        <div className="rating-stars">
            <div ref={activeStarsRef} className="active-stars"></div>
        </div>
    </div>
}