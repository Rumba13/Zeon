import "./singleNews.scss";

type PropsType = {
    title?: string,
    text?: string,
    link?: string
}

const MAX_LENGTH_OF_STRING = 95;


const testText = "╨Ш╨╜╤Б╨┐╨╡╨║╤Ж╨╕╤П ╨Ь╨╕╨╜╨╕╤Б╤В╨╡╤А╤Б╤В╨▓╨░ ╨┐╨╛ ╨╜╨░╨╗╨╛╨│╨░╨╝ ╨╕ ╤Б╨▒╨╛╤А╨░╨╝ ╨а╨╡╤Б╨┐╤Г╨▒╨╗╨╕╨║╨╕ ╨С╨╡╨╗╨░╤А╤Г╤Б╤М ╨┐╨╛ ╨У╨╛╨╝╨╡╨╗╤М╤Б╨║╨╛╨╣ ╨╛╨▒╨╗╨░╤Б╤В╨╕ ╨╜╨░╨┐╨╛╨╝╨╕╨╜╨░╨╡╤В, ╤З╤В╨╛ ╤Б╤А╨╛╨║ ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╗╨╡╨╜╨╕╤П ╨╜╨░╨╗╨╛╨│╨╛╨▓╨╛╨╣ ╨┤╨╡╨║╨╗╨░╤А╨░╤Ж╨╕╨╕ (╤А╨░╤Б╤З╨╡╤В╨░) ╨┐╨╛ ╨┐╨╛╨┤╨╛╤Е╨╛╨┤╨╜╨╛╨╝╤Г ╨╜╨░╨╗╨╛╨│╤Г ╤Б ╤Д╨╕╨╖╨╕╤З╨╡╤Б╨║╨╕╤Е ╨╗╨╕╤Ж, ╨┐╨╛ ╨┤╨╛╤Е╨╛╨┤╨░╨╝, ╨┐╨╛╨╗╤Г╤З╨╡╨╜╨╜╤Л╨╝ ╨╖╨░ 2022 ╨│╨╛╨┤, ╤Б 1 ╤П╨╜╨▓╨░╤А╤П ╨┐╨╛ 31 ╨╝╨░╤А╤В╨░ 2023 ╨│╨╛╨┤╨░.",
    testLink = "https://www.777555.by/news/174/",
    testTitle = "╨Э╨Р╨Ы╨Ю╨У╨Ю╨Т╨л╨Х ╨Ю╨а╨У╨Р╨Э╨л ╨Э╨Р╨Я╨Ю╨Ь╨Ш╨Э╨Р╨о╨в!"



export default function SingleNews({ title = testTitle, link = testLink, text = testText }: PropsType) {

    if (text.length > MAX_LENGTH_OF_STRING) {
        text = text.slice(0, MAX_LENGTH_OF_STRING);
    }

    return <div className="single-news">
        <h2 className="single-news__title">{title}</h2>
        <span className="single-news__text">{text}</span>
        <a href={link} className="single-news__link">Читать подробнее</a>
    </div>
}