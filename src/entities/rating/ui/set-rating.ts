import React from "react";

export function setRatingAndUpdateStars(rating: number, _setRating: Function, highlightingStarsRef: React.RefObject<HTMLDivElement>) {
    if (rating > 5 || rating < 0) {
        return;
    }

    _setRating(rating);
    highlightActiveStars(rating);

    function highlightActiveStars(starCount: number) {
        highlightingStarsRef.current?.style.setProperty("--active-stars-procent", `${starCount * 20}%`)
    }
}