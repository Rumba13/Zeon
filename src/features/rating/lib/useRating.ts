import React, { useState } from "react";

export function useRating() {
    const highlightedStarsRef = React.createRef<HTMLDivElement>();
    const [ratingValue, setStarCounterCount] = useState<number>(0);

    function setRating(rating: number) {
        if (rating > 5 || rating < 0) {
            return;
        }

        setStarCounterCount(rating);
        highlightActiveStars(rating);

        function highlightActiveStars(starCount: number) {
            highlightedStarsRef.current?.style.setProperty("--active-stars-procent", `${starCount * 20}%`)
        }
    }

    return { highlightedStarsRef, setRating, ratingValue }
}