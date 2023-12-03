import "./styles.scss"
import {useEffect, useState} from "react";
import {NewsType} from "../../../shared/api/types/news-type";
import Loading from "../../../shared/ui/loading/ui";
import {newsService} from "../../../shared/api/news-service";
import DOMPurify from "dompurify";
import {useParams} from "react-router-dom";

export const NewsPage = () => {
    const [news, setNews] = useState<NewsType | null>(null);

    const {id} = useParams();

    useEffect(() => {
        newsService.getNewsById(Number(id)).then(setNews);
    }, [id]);

    if (!news) {
        return <Loading/>
    }

    return <div className="news-page">
        <h1 className="news-page__title">{news.title}</h1>
        <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(news.content)}}></div>
    </div>
}