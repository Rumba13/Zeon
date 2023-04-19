import { MouseEventHandler } from "react";
import "./icon.scss";

type PropsType = {
    icon: string,
    className?: string,
    onClick?: MouseEventHandler
}

export default function Icon({ icon, className = "", onClick }: PropsType) {
    return <img onClick={onClick} src={icon} className={`icon ${className}`} />
}