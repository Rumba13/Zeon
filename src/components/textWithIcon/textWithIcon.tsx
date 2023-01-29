import "./textWithIcon.css";

type PropsType = {
    icon?: string,
    text: string,
    link?: string,
    className?:string
}

export default function TextWithIcon({ icon, text, link, className = "" }: PropsType) {

    if (link) { //refactoring
        return <a className={`text-with-icon ${className}`} href={link}>
            <img src={icon} alt="" className="text-with-icon__icon" />
            <span className="text-with-icon__text">{text}</span>
        </a>
    }
    else {
        return <div className={`text-with-icon ${className}`}>
        <img src={icon} alt="" className="itext-with-icon__icon" />
        <span className="text-with-icon__text">{text}</span>
    </div>
    }
}