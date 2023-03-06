import { ReactElement, ReactNode } from "react";
import "./button.scss";

type PropsType = {
    children:ReactNode,
    className?:string
}

export default function Button({children,className}:PropsType) {
    var buttonClassName = "button";
    if(className) buttonClassName += " "  + className;
    
    return <div className={buttonClassName}>{children}</div>
}