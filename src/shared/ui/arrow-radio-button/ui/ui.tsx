import "./styles.scss";
import { useState } from "react";
import { Sprite } from "../../sprite/ui";
import {RadioButton} from "../../radio-button";
import { SortByType } from "../../../../pages/search-page";

type PropsType = {
    radioGroup: string,
    value: SortByType,
    currentValue: string,
    children: string,
    setCurrentIsArrowUp: Function,
    setSortBy: Function,
}

export function ArrowRadioButton({ children: title, radioGroup, currentValue, setCurrentIsArrowUp, value, setSortBy }: PropsType) {
    const [isArrowUp, _setIsArrowUp] = useState(false);
    const isActive = currentValue === value;

    function toggleArrowOrSetSortBy() {
        if (isActive) {
            _setIsArrowUp(!isArrowUp);
            setCurrentIsArrowUp(!isArrowUp);
        }
        else {
            setSortBy(value);
        }
    }

    return <RadioButton className={`arrow-radio-button ${isActive ? "active" : ""}`} onClick={toggleArrowOrSetSortBy} radioGroup={radioGroup}>
        {title}
        <Sprite className={`arrow ${isArrowUp ? "_up" : "_down"}`} yOffset={-31} />
    </RadioButton>
}