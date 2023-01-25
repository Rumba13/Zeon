import "./iconText.css";

type PropsType = {
    icon?: string,
    text: string,
    link?: string,
    className?:string
}

export default function IconText({ icon, text, link, className = "" }: PropsType) {

    if (link) {
        return <a className={`icon-text ${className}`} href={link}>
            <img src={icon} alt="" className="icon-text__icon" />
            <span className="icon-text__text">{text}</span>
        </a>
    }
    else {
        return <div className={`icon-text ${className}`}>
        <img src={icon} alt="" className="icon-text__icon" />
        <span className="icon-text__text">{text}</span>
    </div>
    }
}