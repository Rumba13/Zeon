import Tag, { TagType } from "./tag/tag";
import "./tags.scss";

type PropsType = {
    tags: TagType[]
}

export default function Tags({ tags }: PropsType) {

    return <div className="tags">
        <h2 className="tags__title">Популярные теги:</h2>
        <div className="tags-container">
            {tags.map(tag => <Tag {...tag} />)}
        </div>
    </div>
}