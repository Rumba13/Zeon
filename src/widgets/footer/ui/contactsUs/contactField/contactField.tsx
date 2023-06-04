import { Sprite } from "../../../../../shared/ui//sprite";
import "./contactField.scss";

type PropsType = {
    text: any,
    link?: string,
    spriteYOffset: number
}

export default function ContactsField({ text, link, spriteYOffset }: PropsType) {
    return <a href={link} className="contacts-field">
        <Sprite yOffset={spriteYOffset} />
        <span className="contacts-field__text">{text}</span>
    </a>
}