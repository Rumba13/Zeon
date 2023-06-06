import { SearchTagDto } from "../../../../../pages/searchPage/lib/dtos";
import "./styles.scss";
import { Link } from "react-router-dom";

type PropsType = SearchTagDto

export function Tag({ title, link }: PropsType) {
    return <div className={`tag ${false ? "active" : ""}`}>
        <Link to={link}>
            {title}
        </Link>
    </div>
}
