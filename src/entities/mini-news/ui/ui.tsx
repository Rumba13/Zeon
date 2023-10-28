import { miniNewsService } from "../api/service";
import "./styles.scss";
import { useEffect, useState } from "react";

type PropsType = {}

type MiniNewsType = {
    title: string,
    text: string,
    link: string
}

export function MiniNews({ }: PropsType) {
    const [miniNews, setMiniNews] = useState<MiniNewsType | undefined>();

    useEffect(() => {
        miniNewsService.getMiniNews().then(setMiniNews);
    }, [miniNewsService]);

    if (miniNews === undefined) {
        return <></>
    }

    return <div className="mini-news">
        <h2 className="mini-news__title">{miniNews.title}</h2>
        <span className="mini-news__text">{miniNews.text}</span>
        <a href={miniNews.link} className="mini-news__link">Читать подробнее</a>
    </div>
}