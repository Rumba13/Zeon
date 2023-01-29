import "./singleNews.css";

type PropsType = {
    title:string,
    text:string,
    link:string
}

const MAX_LENGTH_OF_STRING = 95

export default function SingleNews({title,text,link}: PropsType) {


    if(text.length > MAX_LENGTH_OF_STRING) {
        text = text.slice(0, MAX_LENGTH_OF_STRING);
    }


    return <div className="single-news">
        <h2 className="single-news__title">{title}</h2>
        <span className="single-news__text">{text}</span>
        <a href={link} className="single-news__link">Читать подробнее</a>
    </div>
}