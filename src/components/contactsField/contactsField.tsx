import Icon from "../icon/icon";
import "./contactsField.css";

type PropsType = {
    text:any,
    link?:string,
    spriteYOffset:number
}

export default function ContactsField({text,link,spriteYOffset}:PropsType) {
    return <a href={link} className="contacts-field">
    <Icon sprite={{yOffset: spriteYOffset}}/>
    <span className="contacts-field__text">{text}</span>
</a>
}