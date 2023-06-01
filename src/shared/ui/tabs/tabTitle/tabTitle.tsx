import { ReactNode } from "react";
import "./tabTitle.scss";

type PropsType = {
    children:ReactNode
}

export default function TabTitle({children}:PropsType) {
    return <div className="tab-title">{children}</div>
}