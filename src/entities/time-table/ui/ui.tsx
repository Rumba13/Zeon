import "./styles.scss";
import { useState } from "react";
import { Sprite } from "../../../shared/ui/sprite/ui";

export function TimeTable() {
    const defaultOpenedState = document.body.clientWidth < 600;
    const [isOpened, setIsOpened] = useState(defaultOpenedState);

    return <div className="time-table-wrapper">
        <div onClick={() => setIsOpened(!isOpened)} className={`time-table ${isOpened ? "opened" : ""}`}>
            <Sprite yOffset={-245} />
            <span className="time-table__text">Пн-сб: 10 - 19, Вс: 10 - 17</span>
        </div>
    </div>
}