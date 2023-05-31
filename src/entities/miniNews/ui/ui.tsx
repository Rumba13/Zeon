import "./styles.scss";

type PropsType = {}

export function MiniNews({}: PropsType) {

    return <div className="mini-news">
        <h2 className="mini-news__title">НАЛОГОВЫЕ ОРГАНЫ НАПОМИНАЮТ!</h2>
        <span className="mini-news__text">Инспекция Министерства по налогам и сборам Республики Беларусь по Гомельской области напоминает</span>
        <a href="##" className="mini-news__link">Читать подробнее</a>
    </div>
}