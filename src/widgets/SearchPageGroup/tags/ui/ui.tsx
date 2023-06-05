import { SelectionTagDto } from "../../../../pages/searchPage/lib/dtos";
import "./styles.scss";
import Tag from "./tag";

type PropsType = {
    tags: SelectionTagDto[]
}

export function Tags({ tags }: PropsType) {
    return <div className="tags">
        <h2 className="tags__title">Популярные теги:</h2>
        <div className="tags-container">
            {tags.map(tag => <Tag {...tag} />)}
        </div>
    </div>
}