import Sprite from "../sprite/sprite";
import "./timetable.scss";

export default function Timetable() {
    return <div className="time-table-wrapper">
        <div className="time-table">
            <Sprite yOffset={-245} />
            <span className="time-table__text">
                Пн-сб: 10 - 19, Вс: 10 - 17
            </span>
        </div>
    </div>
}