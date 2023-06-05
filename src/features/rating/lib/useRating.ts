import React, { useState } from "react";

export function useRating() {
    const highlightStarsRef = React.createRef<HTMLDivElement>();
    const [activeStarCount, setStarCounterCount] = useState<number>(0);

    function setRating(rating: number) {
        if (rating > 5 || rating < 0) {
            return console.warn("idiotto rating more than 5");
        }

        setStarCounterCount(rating);
        highlightActiveStars(rating)

        function highlightActiveStars(count: number) {
            highlightStarsRef.current?.style.setProperty("--active-stars-procent", `${count * 20}%`)
        }
    }

    return { highlightStarsRef, setRating, activeStarCount }
}