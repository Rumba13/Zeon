import "./styles.scss";
import { Link } from "react-router-dom";
import { SelectionTagDto } from "../../../../../pages/productSelectionPage/lib/dtos";

type PropsType = SelectionTagDto

export default function Tag({ title, link }: PropsType) {
    return <div className={`tag ${false ? "active" : ""}`}>
        <Link to={link}>
            {title}
        </Link>
    </div>
}

export type { PropsType as TagType }