import React from "react";
import "./rating.scss";

type PropsType = {

}

export default function Rating({ }: PropsType) {
    const activeStarsRef = React.createRef<HTMLDivElement>();
    const starsCounter = React.createRef<HTMLDivElement>();

    function setRating(rating: number) {
        if (rating > 5) {
            return console.warn("idiotto rating more than 5");
        }
        setActiveStars(rating)
        setStarsCounter(rating);

        function setActiveStars(count:number) {
            activeStarsRef.current?.style.setProperty("--active-stars-procent", `${count * 20}%`)
        }
        function setStarsCounter(count: number) {
            if (starsCounter.current) starsCounter.current.textContent = count.toString()
        }
    }
    
    return <div className="rating">
        <span className="rating__title">Рейтинг:</span>

        <div className="rating-widget">
            <div className="minus">-</div>
            <div ref={starsCounter} className="rating-widget__rating">0</div>
            <div className="plus">+</div>
        </div>
        <div className="rating-stars">
            <div ref={activeStarsRef} className="rating-stars-active"></div>
        </div>
    </div>
}