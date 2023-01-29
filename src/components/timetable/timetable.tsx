import Icon from "../icon/icon";
import "./timetable.css";

export default function Timetable() {
    return <div className="time-table">
        <div className="time-table-text-wrapper">
        <Icon sprite={{xOffset:0, yOffset:-245}}/>
        Пн-сб: 10 - 19, Вс: 10 - 17
        </div>
    </div>
}