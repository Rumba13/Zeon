import "./styles.scss";
import { ReactNode } from "react";

type PropsType = {
    children: ReactNode
}

export function TabContent({ children: content }: PropsType) {
    return <span className="tab__content" key={String(content)}>{content}</span>
}