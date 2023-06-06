import { SelectionTagDto } from "../../../../../pages/searchPage/lib/dtos";
import "./styles.scss";
import { Link } from "react-router-dom";

type PropsType = SelectionTagDto

export function Tag({ title, link }: PropsType) {
    return <div className={`tag ${false ? "active" : ""}`}>
        <Link to={link}>
            {title}
        </Link>
    </div>
}
