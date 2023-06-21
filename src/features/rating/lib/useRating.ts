import React, { useState } from "react";

export function useRating(_setRating:(rating:number) => any) {
    const highlightingStarsRef = React.createRef<HTMLDivElement>();

    function setRating(rating: number) {
        if (rating > 5 || rating < 0) {
            return;
        }

        _setRating(rating);
        highlightActiveStars(rating);

        function highlightActiveStars(starCount: number) {
            highlightingStarsRef.current?.style.setProperty("--active-stars-procent", `${starCount * 20}%`)
        }
    }

    return { highlightingStarsRef, setRating }
}