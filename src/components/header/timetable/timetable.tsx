import "./timetable.scss";
import Sprite from "../../sprite/sprite";
import useTimeTable from "./useTimeTable";

export default function Timetable() {
    const {timeTableClassName,timeTableClickHandler} = useTimeTable();

    return <div className="time-table-wrapper">
        <div onClick={timeTableClickHandler} className={`time-table ${timeTableClassName}`}>
            <Sprite yOffset={-245} />
            <span className="time-table__text">Пн-сб: 10 - 19, Вс: 10 - 17</span>
        </div>
    </div>
}