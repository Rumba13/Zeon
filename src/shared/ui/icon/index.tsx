import "./styles.scss";
import {MouseEventHandler} from "react";

type PropsType = {
    icon: string,
    className?: string,
    onClick?: Function
}

export function Icon({icon, className, onClick}: PropsType) {
    return <img className={`icon ${className ?? ""}`} src={icon} onClick={onClick as MouseEventHandler}/>
}