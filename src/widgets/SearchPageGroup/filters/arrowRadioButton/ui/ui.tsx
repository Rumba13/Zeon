import "./styles.scss";
import { useState } from "react";
import { Sprite } from "../../../../../shared/ui/sprite/ui";
import {RadioButton} from "../../../../../shared/ui/radio-button";
import { SortByType } from "../../../../../pages/search-page";

type PropsType = {
    radioGroup: string,
    sortBy: SortByType,
    currentSortBy: string,
    children: string,
    setStateIsArrowUp: Function,
    setSortBy: Function,
}

export function ArrowRadioButton({ children: title, radioGroup, currentSortBy, setStateIsArrowUp, sortBy, setSortBy }: PropsType) {
    const [isArrowUp, _setIsArrowUp] = useState(false);
    const isActive = currentSortBy === sortBy;

    function toggleArrowOrSetSortBy() {
        if (isActive) {
            _setIsArrowUp(!isArrowUp);
            setStateIsArrowUp(!isArrowUp);
        }
        else {
            setSortBy(sortBy);
        }
    }

    return <RadioButton className={`arrow-radio-button ${isActive ? "active" : ""}`} onClick={toggleArrowOrSetSortBy} radioGroup={radioGroup}>
        {title}
        <Sprite className={`arrow ${isArrowUp ? "_up" : "_down"}`} yOffset={-31} />
    </RadioButton>
}