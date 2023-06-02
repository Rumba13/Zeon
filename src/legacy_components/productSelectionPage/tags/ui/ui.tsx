import { SelectionTagDto } from "../../../../pages/productSelectionPage/lib/dtos";
import Tag from "./tag";
import "./styles.scss";

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