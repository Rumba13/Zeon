import "./styles.scss";
import { Tag } from "./tag";
import {SearchTagType} from "../../../../shared/api/types/search-tag-type";
import Loading from "../../../../shared/ui/loading/ui";

type PropsType = {
    searchTags?: SearchTagType[]
}

export function Tags({ searchTags }: PropsType) {

    if(!searchTags) {
        return <Loading />
    }

    return <div className="tags">
        <h2 className="tags__title">Популярные теги:</h2>
        <div className="tags-container">
            {searchTags.map(tag => <Tag {...tag} />)}
        </div>
    </div>
}