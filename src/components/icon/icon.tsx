import { MouseEventHandler } from "react";
import "./icon.scss";

type PropsType = {
    icon: string,
    className?: string,
    onClick?: Function
}

export default function Icon({ icon, className = "", onClick }: PropsType) {
    return <img onClick={onClick as MouseEventHandler<HTMLImageElement>} src={icon} className={`icon ${className}`} />
}