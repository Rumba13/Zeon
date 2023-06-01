import { ReactNode } from "react";
import "./tabTitles.scss";

type PropsType = {
    children:ReactNode
}

export default function tabTitles({children}:PropsType) {
    return <div className="tab-list">{children}</div>
}