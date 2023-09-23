import "./styles.scss";
import { Link } from "react-router-dom";
import {SearchTagType} from "../../../../../shared/api/types/search-tag-type";

type PropsType = SearchTagType

export function Tag({ title, link }: PropsType) {
    return <div className={`tag ${false ? "active" : ""}`}>
        <Link to={link}>
            {title}
        </Link>
    </div>
}
