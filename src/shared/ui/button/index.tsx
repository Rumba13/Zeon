import "./styles.scss";
import {MouseEventHandler, ReactNode} from "react";

type PropsType = {
    children: ReactNode,
    className?: string,
    onClick?: Function
}

export function Button({children, className, onClick}: PropsType) {
    return <div className={`button ${className ?? ""}`} onClick={onClick as MouseEventHandler}>{children}</div>
}