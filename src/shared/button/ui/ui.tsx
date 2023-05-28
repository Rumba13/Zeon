import "./styles.scss";
import { ReactNode } from "react";

type PropsType = {
    children:ReactNode,
    className?:string
}

export function Button({children,className}:PropsType) {
    return <div className={`button ${className ?? ""}`}>{children}</div>
}