import "./styles.scss";
import { Tag } from "./tag";
import {SearchTagType} from "../../../../shared/api/types/search-tag-type";

type PropsType = {
    tags: SearchTagType[]
}

export function Tags({ tags }: PropsType) {
    return <div className="tags">
        <h2 className="tags__title">Популярные теги:</h2>
        <div className="tags-container">
            {tags.map(tag => <Tag {...tag} />)}
        </div>
    </div>
}