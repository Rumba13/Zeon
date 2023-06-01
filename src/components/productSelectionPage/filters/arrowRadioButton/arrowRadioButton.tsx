import { useState } from "react";
import "./arrowRadioButton.scss";
import { Sprite } from "../../../../entities/sprite";
import { RadioButton } from "../../../../entities/radioButton";

type PropsType = {
    children: string,
    radioGroup: string,
    currentFilter: string,
    setArrowValue: Function
}

export default function ArrowRadioButton({ children: title, radioGroup, currentFilter, setArrowValue }: PropsType) {
    const [isArrowUp, setIsArrowUp] = useState(false);
    const isActive = currentFilter === title;

    function toggleArrowIfFilterActive() {
        if (isActive) {
            setIsArrowUp(!isArrowUp);
            setArrowValue(!isArrowUp);
        }
    }

    return <RadioButton onClick={toggleArrowIfFilterActive} className={`arrow-radio-button ${isActive ? "active" : ""}`} radioGroup={radioGroup} title={title}>
        {title}
        <Sprite className={`arrow ${isArrowUp ? "_up" : "_down"}`} yOffset={-31} />
    </RadioButton>
}