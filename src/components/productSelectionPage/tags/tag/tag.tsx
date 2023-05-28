import { Link } from "react-router-dom";
import "./tag.scss";

type PropsType = {
    title: string,
    link: string,
    isActive: boolean
}

export default function Tag({ title, isActive, link }: PropsType) {
    return <div className={`tag ${isActive ? "active" : ""}`}>
        <Link to={link}>
            {title}
        </Link>
    </div>
}

export type {PropsType as TagType}