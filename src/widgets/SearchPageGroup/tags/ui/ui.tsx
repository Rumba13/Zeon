import "./styles.scss";
import { SearchTagDto } from "../../../../pages/searchPage/lib/dtos";
import {Tag} from "./tag";

type PropsType = {
    tags: SearchTagDto[]
}

export function Tags({ tags }: PropsType) {
    return <div className="tags">
        <h2 className="tags__title">Популярные теги:</h2>
        <div className="tags-container">
            {tags.map(tag => <Tag {...tag} />)}
        </div>
    </div>
}